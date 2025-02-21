import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {getGreeting} from '../../utils/common';
import fonts from '../../utils/fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MainHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity style={styles.imageContainer}>
          <Image
            style={styles.profileImage}
            source={require('./../../../assets/images/profile/avatar.jpg')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>{getGreeting()}</Text>
          <Text style={styles.nameText}>Jhantu Bala</Text>
        </View>
      </View>
      <View style={styles.notififationContainer}>
        <TouchableOpacity style={styles.notificationBox}>
          <View style={styles.isNotification}></View>
          <MaterialIcons name="notifications-none" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  leftContainer: {
    width: '50%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.primary,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  greetingContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingText: {
    fontSize: 12,
    fontFamily: fonts.semibold,
    color: colors.primary,
  },
  nameText: {
    fontSize: 14,
    fontFamily: fonts.bold,
    marginTop: -7,
  },
  notififationContainer: {
    width: 50,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  isNotification: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
    right: 0,
    top: 0,
  },
});

export default MainHeader;
