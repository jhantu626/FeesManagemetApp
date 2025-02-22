import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../utils/colors';
import {getGreeting} from '../../utils/common';
import fonts from '../../utils/fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {teacherService} from '../../services/TeacherService';

const MainHeader = ({authToken}) => {
  const [profileData, setProfileData] = useState({});
  const fetchProfile = async () => {
    try {
      const data = await teacherService.fetchTeacherProfile({
        authToken: authToken,
      });
      setProfileData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity style={styles.imageContainer}>
          <Image
            style={styles.profileImage}
            source={
              profileData?.profilePic
                ? {
                    uri: `${process.env.API_URL}/api/v1/file/profile/${profileData?.profilePic}`,
                  }
                : require('./../../../assets/images/profile/avatar.jpg')
            }
            resizeMode="cover"
          />
        </TouchableOpacity>
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>{getGreeting()}</Text>
          <Text style={styles.nameText}>
            {profileData?.name ? profileData?.name : 'User'}
          </Text>
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
    width: '90%',
    height: '100%',
    flexDirection: 'row',
    // justifyContent: 'space-between',
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
    marginLeft: 10
    // alignItems: 'center',
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
    width: '10%',
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
