import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../utils/colors';
import fonts from '../../utils/fonts';

const SecondaryHeader = ({title, isBtn = false, btnText}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity style={styles.backableBtn}>
          <AntDesign name="arrowleft" size={30} />
        </TouchableOpacity>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      {isBtn && (
        <TouchableOpacity style={styles.rightSideBtn}>
          <Text style={styles.btnText}>{btnText} +</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: 60,
    width: '100%',
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    width: '50%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backableBtn: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    borderRadius: 20,
  },
  titleText: {
    fontSize: 16,
    fontFamily: fonts.semibold,
  },
  rightSideBtn: {
    width: '42%',
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 14,
    color: colors.secondary,
    fontFamily: fonts.medium,
  },
});

export default SecondaryHeader;
