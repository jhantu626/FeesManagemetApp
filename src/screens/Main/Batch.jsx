import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BackgorundView, SecondaryHeader} from '../../components';
import {useAuth} from '../../contexts/AuthContext';

const Batch = () => {
  const {logout} = useAuth();
  return (
    <BackgorundView>
      <SecondaryHeader
        title={'Batch List'}
        isBtn={true}
        btnText={'Create Batch'}
        isParent={true}
      />
      <TouchableOpacity onPress={() => logout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </BackgorundView>
  );
};

export default Batch;

const styles = StyleSheet.create({});
