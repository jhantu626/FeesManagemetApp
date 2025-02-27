import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  AnalyseComponent,
  AnalyseGraph,
  BackgorundView,
  FeesList,
  MainHeader,
  StudentList,
} from '../../components';
import {LineChart} from 'react-native-chart-kit';
import {useAuth} from '../../contexts/AuthContext';

const Home = () => {
  const {authToken} = useAuth();

  return (
    <BackgorundView>
      <MainHeader authToken={authToken} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header for analysis cards */}
        <AnalyseComponent authToken={authToken} />
        {/* Monthly Analysis Report */}
        <AnalyseGraph />
        {/* StudentsList */}
        <StudentList authToken={authToken} />
        {/* Fees List */}
        <FeesList authToken={authToken}/>
      </ScrollView>
    </BackgorundView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
