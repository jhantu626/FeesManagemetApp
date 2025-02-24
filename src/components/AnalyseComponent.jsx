import {ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
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

  const fetchStudentData = async () => {
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
  };

  useEffect(() => {
    fetchFeesData();
    fetchStudentData();
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

      <AnalyseCard
        text={'5'}
        icon={require('./../../assets/images/dashboard/subject-icon.webp')}
        percentage={150}
        description={'Total Subjects'}
      />
      <AnalyseCard
        text={'10'}
        icon={require('./../../assets/images/dashboard/teacher-icon.webp')}
        percentage={100}
        description={'Total Batches'}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default AnalyseComponent;
