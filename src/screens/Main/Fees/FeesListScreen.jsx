import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackgorundView, FeesList, SecondaryHeader} from '../../../components';
import {ScrollView} from 'react-native-gesture-handler';
import {useAuth} from '../../../contexts/AuthContext';

const FeesListScreen = () => {
  const {authToken} = useAuth();
  return (
    <BackgorundView>
      <SecondaryHeader title={'Fees List'} />
      <ScrollView style={{flex: 1, padding: 10}}>
        <FeesList authToken={authToken} />
      </ScrollView>
    </BackgorundView>
  );
};

export default FeesListScreen;

const styles = StyleSheet.create({});
