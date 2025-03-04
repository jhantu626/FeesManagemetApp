import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackgorundView, SecondaryHeader} from '../../../components';

const StudentRegister = () => {
  return (
    <BackgorundView>
      <SecondaryHeader title={'Student Register'} />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            
        </View>
      </ScrollView>
    </BackgorundView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'red',
  },
});

export default StudentRegister;
