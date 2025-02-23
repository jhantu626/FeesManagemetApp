import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import fonts from '../../utils/fonts';

const StudentListCard = ({name, profileImage, mobile}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          style={styles.profileImage}
          source={
            profileImage
              ? {
                  uri: `${process.env.API_URL}/api/v1/file/profile/${profileImage}`,
                }
              : require('./../../../assets/images/profile/avatar.jpg')
          }
        />
        <View style={styles.textContainer}>
          <Text style={styles.nameTxt}>{name ? name : 'Student'}</Text>
          <Text style={styles.phoneTxt}>
            +91 {mobile ? mobile : '97XXXXXX84'}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.callBtn}
        onPress={() => {
          const url = `tel:${mobile}`;
          Linking.openURL(url);
        }}>
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
    width: '80%',
    height: '100%',
    // backgroundColor: 'red',
    // justifyContent: 'space-between',
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
    marginBottom: -3,
  },
  phoneTxt: {
    fontSize: 13,
    fontFamily: fonts.medium,
    color: colors.textOnGray,
  },
  textContainer: {
    paddingLeft: 10,
  },
});
