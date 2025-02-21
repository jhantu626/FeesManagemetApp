import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackgorundView, SecondaryHeader} from '../../components';

const Batch = () => {
  return (
    <BackgorundView>
      <SecondaryHeader
        title={'Batch List'}
        isBtn={true}
        btnText={'Create Batch'}
      />
    </BackgorundView>
  );
};

export default Batch;

const styles = StyleSheet.create({});
