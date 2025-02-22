import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {BackgorundView} from '../../components';
import fonts from '../../utils/fonts';
import {colors} from '../../utils/colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import {authService} from '../../services/AuthService';
import Toast from 'react-native-toast-message';
import {toastConfig} from '../../utils/ToastsConfig';
import {useAuth} from '../../contexts/AuthContext';

const Otp = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {login} = useAuth();

  const {mobile} = route.params;
  console.log(mobile);

  const [otpValues, setOtpValues] = useState(['', '', '', '', '']);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const onChangeText = ({text, index}) => {
    const newOtp = [...otpValues];
    newOtp[index] = text;
    setOtpValues(newOtp);

    if (text.length === 1 && index < inputRef.length - 1) {
      inputRef[index + 1].current.focus();
    }
  };

  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === 'Backspace' && index > 0) {
      inputRef[index - 1].current.focus();
    }
  };

  const checkOtp = async () => {
    try {
      setIsLoading(true);
      const fullfilledOtp = otpValues.join('');
      const data = await authService.validateOtp({
        mobile: mobile,
        otp: fullfilledOtp,
      });
      if (data?.status) {
        login({authToken: data?.token});
      } else {
        Toast.show({
          text1: 'Invalid otp',
          type: 'info',
          visibilityTime: 2000,
        });
      }
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const isFullfiled = otpValues.every(otp => otp.length > 0);
    if (isFullfiled) {
      checkOtp();
    }
  }, [otpValues]);

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
          source={require('./../../../assets/images/otp.webp')}
          resizeMode="center"
        />
        <Text style={styles.title}>Log in</Text>
        <Text style={styles.subTitle}>
          Stay connected and manage everything in one place.
        </Text>

        <View style={styles.inputContainer}>
          {inputRef.map((ref, index) => {
            return (
              <TextInput
                key={index}
                ref={ref}
                style={[
                  styles.otpInput,
                  focusedIndex === index && {borderColor: colors.primary},
                ]}
                onFocus={() => setFocusedIndex(index)}
                keyboardType="number-pad"
                maxLength={1}
                value={otpValues[index]}
                onChangeText={text => onChangeText({text: text, index: index})}
                onKeyPress={event => handleKeyPress(event, index)}
                selectionColor={colors.primary}
              />
            );
          })}
        </View>
        <TouchableOpacity disabled={isLoading} style={styles.loginBtn}>
          {isLoading ? (
            <ActivityIndicator size={'large'} color={colors.secondary} />
          ) : (
            <Text style={styles.loginTxt}>Login</Text>
          )}
        </TouchableOpacity>
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
  inputContainer: {
    width: 300,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    gap: 10,
  },
  otpInput: {
    width: '17%',
    height: 55,
    borderWidth: 1.5,
    borderColor: colors.textOnGray,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: fonts.medium,
    color: colors.textOnGray,
    cursor: 'auto',
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
});

export default Otp;
