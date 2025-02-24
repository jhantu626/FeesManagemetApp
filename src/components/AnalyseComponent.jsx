import {ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import AnalyseCard from './Cards/AnalyseCard';
import {ShimmerAnalyseCard} from '../Shimmers';
import {analyseService} from '../services/AnalyseService';

const AnalyseComponent = ({authToken}) => {
  // For student analysis
  const [isFeesLoading, setIsFeesLoading] = useState(true);
  const [feesData, setFeesData] = useState({});

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

  useEffect(() => {
    fetchFeesData();
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

      <AnalyseCard
        text={'417'}
        icon={require('./../../assets/images/dashboard/student-icon.webp')}
        percentage={100}
        description={'Total Students'}
      />
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
