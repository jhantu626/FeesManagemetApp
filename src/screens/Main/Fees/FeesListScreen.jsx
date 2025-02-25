import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackgorundView, FeesList, SecondaryHeader} from '../../../components';
import {ScrollView} from 'react-native-gesture-handler';

const FeesListScreen = () => {
  return (
    <BackgorundView>
      <SecondaryHeader title={'Fees List'} />
      <ScrollView style={{flex: 1, padding: 10}}>
        <FeesList />
      </ScrollView>
    </BackgorundView>
  );
};

export default FeesListScreen;

const styles = StyleSheet.create({});
