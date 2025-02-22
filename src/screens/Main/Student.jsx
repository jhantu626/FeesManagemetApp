import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BackgorundView, SecondaryHeader} from '../../components';
import {useAuth} from '../../contexts/AuthContext';

const Student = () => {
  const {logout} = useAuth();
  return (
    <BackgorundView>
      <SecondaryHeader title="Student" />
      <TouchableOpacity onPress={() => logout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </BackgorundView>
  );
};

export default Student;

const styles = StyleSheet.create({});
