import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackgorundView} from '../components';

const SplashScreen = () => {
  return (
    <BackgorundView>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>SplashScreen</Text>
      </View>
    </BackgorundView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
