import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BackgorundView} from '../../components';
import fonts from '../../utils/fonts';
import {colors} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';

const AuthHome = () => {
  const navigation = useNavigation();
  return (
    <BackgorundView>
      <View style={styles.container}>
        <Image
          style={{
            width: 100,
            height: 100,
          }}
          source={require('./../../../assets/images/logo.webp')}
          resizeMode="center"
        />
        <Image
          style={styles.bannerImage}
          source={require('./../../../assets/images/login.webp')}
          resizeMode="center"
        />
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.subTitle}>
          Welcome to Fees Management, where you can manage your institute
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={[styles.btn, {backgroundColor: colors.primary}]}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={[styles.btnText, {color: colors.secondary}]}>
              Login
            </Text>
          </TouchableOpacity>
          <Text style={styles.middleText}>-- or --</Text>
          <TouchableOpacity
          onPress={()=>navigation.navigate("Register")}
            style={[styles.btn, {borderWidth: 1, borderColor: '#000'}]}>
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgorundView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  bannerImage: {
    width: 300,
    height: 250,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.bold,
    color: colors.primary,
    paddingVertical: 5,
  },
  subTitle: {
    fontSize: 12,
    fontFamily: fonts.semibold,
    textAlign: 'center',
    color: colors.textOnGray,
  },
  btnContainer: {
    // backgroundColor: 'red',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  btn: {
    width: 200,
    height: 50,
    // backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontFamily: fonts.regular,
  },
  middleText: {
    fontSize: 16,
    fontFamily: fonts.semibold,
    color: colors.textOnGray,
    marginVertical: 10,
  },
});

export default AuthHome;
