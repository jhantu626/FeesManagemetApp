import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BackgorundView} from '../../components';
import fonts from '../../utils/fonts';
import {colors} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {isValidMobile} from '../../utils/validations';

const Login = () => {
  const navigation = useNavigation();

  // State Variables
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState({status: false, msg: ''});
  const [isValid, setIsValid] = useState(false);

  const handleMobilenChange = text => {
    const numRegex = /^\d*$/;
    if (
      text.length <= 10 &&
      numRegex.test(text) &&
      (text.length === 0 || (text[0] >= 6 && text[0] <= 9))
    ) {
      setMobile(text);
      if (!isValidMobile(text) && text.length > 2) {
        setError({status: true, msg: 'Enter valid mobile'});
        setIsValid(false);
      } else {
        setIsValid(true);
        setError({status: false, msg: ''});
      }
    }
  };

  useEffect(() => {
    if (mobile.length === 10) {
      console.log('Checking');
    }
  }, [mobile]);

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
        <Text style={styles.title}>Log in</Text>
        <Text style={styles.subTitle}>
          Stay connected and manage everything in one place.
        </Text>

        <View style={styles.btnContainer}>
          <View
            style={[
              styles.textInputContainer,
              error?.status && {
                borderWidth: 1,
                borderColor: colors.dangerAlert,
              },
            ]}>
            <View style={styles.iconContainer}>
              <MaterialIcons
                style={styles.phoneIcon}
                name="add-call"
                size={24}
              />
            </View>
            <Text
              style={{
                fontSize: 14,
                fontFamily: fonts.regular,
                color: colors.textOnGray,
              }}>
              +91
            </Text>
            <TextInput
              style={styles.loginInput}
              keyboardType="phone-pad"
              placeholder="Enter mobile number"
              maxLength={10}
              value={mobile}
              onChangeText={text => handleMobilenChange(text)}
            />
          </View>
          {error.status && <Text style={styles.alertText}>{error.msg}</Text>}
          <TouchableOpacity
            disabled={!isValid}
            onPress={() => navigation.navigate('Otp')}
            style={styles.loginBtn}>
            <Text style={styles.loginTxt}>Login</Text>
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
    width: '100%',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    width: 300,
    height: 50,
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  iconContainer: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginInput: {
    width: '90%',
    height: '100%',
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.textOnGray,
    paddingHorizontal: 8,
  },
  loginBtn: {
    width: 300,
    height: 50,
    backgroundColor: colors.primary,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  loginTxt: {
    color: colors.secondary,
    fontSize: 20,
    fontFamily: fonts.regular,
  },
  alertText: {
    fontSize: 14,
    fontFamily: fonts.italic,
    marginTop: 5,
    color: colors.dangerAlert,
  },
});

export default Login;
