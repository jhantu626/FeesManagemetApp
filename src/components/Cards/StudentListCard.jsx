import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import fonts from '../../utils/fonts';

const StudentListCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          style={styles.profileImage}
          source={require('./../../../assets/images/profile/avatar.jpg')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.nameTxt}>Jhantu Bala</Text>
          <Text style={styles.phoneTxt}>+91 9775746484</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.callBtn}>
        <Image
          style={styles.callIcon}
          source={require('./../../../assets/images/dashboard/call-icon.webp')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default StudentListCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.7,
    borderBottomColor: colors.gray30,
  },
  leftContainer: {
    flexDirection: 'row',
    width: '55%',
    height: '100%',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 22,
  },
  callBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  callIcon: {
    width: '100%',
    height: '100%',
  },
  nameTxt: {
    fontSize: 16,
    fontFamily: fonts.semibold,
    marginBottom: -3
  },
  phoneTxt: {
    fontSize: 13,
    fontFamily: fonts.medium,
    color: colors.textOnGray
  },
});
