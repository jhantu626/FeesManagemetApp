import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import AnalyseCard from './Cards/AnalyseCard';

const AnalyseComponent = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <AnalyseCard
        text={'$200051'}
        icon={require('./../../assets/images/dashboard/fees-icon.webp')}
        percentage={64}
        description={'This Months Fees'}
      />
      <AnalyseCard
        text={'417'}
        icon={require('./../../assets/images/dashboard/student-icon.webp')}
        percentage={100}
        description={"Total Students"}
      />
      <AnalyseCard
        text={'5'}
        icon={require('./../../assets/images/dashboard/subject-icon.webp')}
        percentage={150}
        description={"Total Subjects"}
      />
      <AnalyseCard
        text={'10'}
        icon={require('./../../assets/images/dashboard/teacher-icon.webp')}
        percentage={100}
        description={"Total Batches"}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default AnalyseComponent;
