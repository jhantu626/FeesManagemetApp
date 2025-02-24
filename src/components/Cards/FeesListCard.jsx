import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import fonts from '../../utils/fonts';

const FeesListCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.nameTxt}>Jhantu Bala</Text>
        <Text style={styles.subText}>Batch - Java(2024)</Text>
        <Text style={styles.subText}>February 2025 Fees</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.priceText}>$1000</Text>
        <Text style={styles.subRecivedFont}>Recived in Feb 24, 2025</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    borderBottomWidth: 0.7,
    borderBottomColor: colors.gray30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  leftContainer: {
    width: '55%',
  },
  nameTxt: {
    fontSize: 15,
    fontFamily: fonts.bold,
  },
  subText: {
    fontSize: 12,
    fontFamily: fonts.medium,
    color: colors.textOnGray,
  },
  rightContainer: {
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },
  priceText: {
    fontSize: 16,
    fontFamily: fonts.bold,
    color: colors.dangerAlert
  },
  subRecivedFont: {
    fontSize: 12,
    fontFamily: fonts.medium,
    color: colors.textOnGray,
  },
});

export default FeesListCard;
