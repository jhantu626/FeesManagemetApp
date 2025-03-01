import {ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState,useCallback} from 'react';
import AnalyseCard from './Cards/AnalyseCard';
import {ShimmerAnalyseCard} from '../Shimmers';
import {analyseService} from '../services/AnalyseService';

const AnalyseComponent = ({authToken}) => {
  // For Fees analysis
  const [isFeesLoading, setIsFeesLoading] = useState(true);
  const [feesData, setFeesData] = useState({});

  // For Students analysis
  const [isStudentLoading, setIsStudentLoading] = useState(true);
  const [studentData, setStudentData] = useState({});

  const fetchFeesData = async () => {
    try {
      setIsFeesLoading(true);
      const data = await analyseService.feesAnalysis({authToken: authToken});
      setFeesData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFeesLoading(false);
    }
  };

  const fetchStudentData = useCallback(async () => {
    try {
      setIsStudentLoading(true);
      const data = await analyseService.studentAnalysis({authToken: authToken});
      setStudentData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsStudentLoading(false);
    }
  }, []);

  const [isSubjectsLoading, setIsSubjectsLoading] = useState(true);
  const [subjectsData, setSubjectsData] = useState({});
  const fetchSubjectsData = useCallback(async () => {
    try {
      setIsSubjectsLoading(true);
      const data = await analyseService.subjectAnalysis({authToken});
      setSubjectsData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubjectsLoading(false);
    }
  }, []);

  const [isBatchesLoading, setIsBatchesLoading] = useState(true);
  const [batchesData, setBatchesData] = useState({});
  const fetchBatchesData = useCallback(async () => {
    try {
      setIsBatchesLoading(true);
      const data = await analyseService.batchAnalysis({authToken});
      setBatchesData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsBatchesLoading(false);
    }
  }, []);

  useEffect(() => {
    console.log('fatching');
    fetchFeesData();
    fetchStudentData();
    fetchSubjectsData();
    fetchBatchesData();
  }, []);

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {isFeesLoading ? (
        <ShimmerAnalyseCard />
      ) : (
        <AnalyseCard
          text={`$${feesData?.current}`}
          icon={require('./../../assets/images/dashboard/fees-icon.webp')}
          percentage={feesData?.percentage}
          description={'This Months Fees'}
        />
      )}
      {isStudentLoading ? (
        <ShimmerAnalyseCard />
      ) : (
        <AnalyseCard
          text={studentData?.current}
          icon={require('./../../assets/images/dashboard/student-icon.webp')}
          percentage={studentData?.percentage}
          description={'Total Students'}
        />
      )}

      {isSubjectsLoading ? (
        <ShimmerAnalyseCard />
      ) : (
        <AnalyseCard
          text={subjectsData?.current}
          icon={require('./../../assets/images/dashboard/subject-icon.webp')}
          percentage={subjectsData?.percentage}
          description={'Total Subjects'}
        />
      )}

      {isBatchesLoading ? (
        <ShimmerAnalyseCard />
      ) : (
        <AnalyseCard
          text={batchesData?.current}
          icon={require('./../../assets/images/dashboard/teacher-icon.webp')}
          percentage={batchesData?.percentage}
          description={'Total Batches'}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default AnalyseComponent;
