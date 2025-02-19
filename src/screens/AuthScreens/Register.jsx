import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {BackgorundView} from '../../components';
import fonts from '../../utils/fonts';

const Register = () => {
  const registerUrl = 'https://fees.busketbell.in/register'; // Replace with your actual register URL

  const handlePress = () => {
    Linking.openURL(registerUrl).catch(err =>
      console.error('Failed to open URL:', err),
    );
  };

  return (
    <BackgorundView>
      <View style={styles.container}>
        <Image
          source={require('./../../../assets/images/not-found.png')} // Replace with your image path
          style={styles.image}
        />
        <Text style={styles.text}>To register, please visit our website:</Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Register Here</Text>
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
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
    fontFamily: fonts.regular,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff', // White text color
    fontFamily: fonts.bold
  },
});

export default Register;
