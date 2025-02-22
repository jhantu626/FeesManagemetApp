import {Image, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import {BackgorundView} from '../components';
import { StackActions, useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation=useNavigation();
  useEffect(()=>{
    setTimeout(()=>{
      console.log('SplashScreen');
      navigation.dispatch(StackActions.replace('AuthHome'));
    },1500)
  },[])

  return (
    <BackgorundView>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
        <Image
          style={{
            width: 300,
            height: 300,
          }}
          source={require('./../../assets/images/logo.webp')}
          resizeMode="center"
        />
      </View>
    </BackgorundView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
