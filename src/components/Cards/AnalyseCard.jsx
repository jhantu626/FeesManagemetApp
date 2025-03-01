import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import fonts from '../../utils/fonts';

const AnalyseCard = ({text, icon, percentage = -10, description}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topContainerSubContainer}>
          <Text style={styles.text}>{text}</Text>
          <Image style={styles.iconImage} source={icon} />
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text
          style={[
            styles.bottomText,
            {color: percentage >= 0 ? 'green' : 'red'},
          ]}>
          {percentage >= 0 ? 'Increased by' : 'Decreased by'}
        </Text>
        <View
          style={[
            styles.percentageContainer,
            {backgroundColor: percentage >= 0 ? '#B8E0C2' : '#FF9999'},
          ]}>
          <Text
            style={[
              styles.percentageText,
              {color: percentage >= 0 ? 'green' : 'red'},
            ]}>
            {percentage.toFixed(1)}%
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 120,
    backgroundColor: colors.secondary,
    borderRadius: 7,
    overflow: 'hidden',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#B3B3B3',
    shadowColor: colors.secondary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    elevation: 8,
  },
  topContainer: {
    width: '100%',
    height: '70%',
    borderBottomWidth: 0.7,
    paddingHorizontal: 20,
    borderBottomColor: colors.textOnGray,
  },
  bottomContainer: {
    width: '100%',
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  topContainerSubContainer: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  text: {
    fontFamily: fonts.bold,
    fontSize: 18,
  },
  description: {
    fontSize: 13,
    fontFamily: fonts.medium,
    color: colors.textOnGray,
  },
  bottomText: {
    fontFamily: fonts.semibold,
    fontSize: 12,
  },
  percentageContainer: {
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 5,
  },
  percentageText: {
    fontFamily: fonts.medium,
    fontSize: 10,
    color: 'green',
  },
});

export default AnalyseCard;
