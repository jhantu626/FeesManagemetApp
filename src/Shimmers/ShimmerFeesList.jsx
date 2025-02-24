import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated, Easing} from 'react-native';
import {colors} from '../utils/colors';

const ShimmerFeesList = () => {
  const shimmerAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateShimmer = () => {
      shimmerAnimation.setValue(0);
      Animated.loop(
        Animated.timing(shimmerAnimation, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ).start();
    };

    animateShimmer();
  }, []);

  const translateX = shimmerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 100], // Adjust based on the width of the shimmer
  });

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.shimmerTitle} />
        <View style={styles.shimmerFilterBtn} />
      </View>
      <View style={styles.listContainer}>
        {[1, 2, 3].map((item, index) => (
          <View key={index} style={styles.shimmerCard}>
            {/* Left Side: Name and Batch */}
            <View style={styles.shimmerLeftContainer}>
              <View style={styles.shimmerName}>
                <Animated.View
                  style={[
                    styles.shimmerOverlay,
                    {transform: [{translateX}]},
                  ]}
                />
              </View>
              <View style={styles.shimmerBatch}>
                <Animated.View
                  style={[
                    styles.shimmerOverlay,
                    {transform: [{translateX}]},
                  ]}
                />
              </View>
              <View style={styles.shimmerMonth}>
                <Animated.View
                  style={[
                    styles.shimmerOverlay,
                    {transform: [{translateX}]},
                  ]}
                />
              </View>
            </View>
            {/* Right Side: Price and Date */}
            <View style={styles.shimmerRightContainer}>
              <View style={styles.shimmerPrice}>
                <Animated.View
                  style={[
                    styles.shimmerOverlay,
                    {transform: [{translateX}]},
                  ]}
                />
              </View>
              <View style={styles.shimmerDate}>
                <Animated.View
                  style={[
                    styles.shimmerOverlay,
                    {transform: [{translateX}]},
                  ]}
                />
              </View>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.viewBtnContainer}>
        <View style={styles.shimmerViewBtn}>
          <Animated.View
            style={[
              styles.shimmerOverlay,
              {transform: [{translateX}]},
            ]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderColor: colors.gray30,
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 10,
  },
  headerContainer: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  shimmerTitle: {
    width: 100,
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  shimmerFilterBtn: {
    width: 60,
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  shimmerCard: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.7,
    borderBottomColor: colors.gray30,
    paddingVertical: 10,
  },
  shimmerLeftContainer: {
    width: '55%',
  },
  shimmerName: {
    width: '70%',
    height: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginBottom: 5,
    overflow: 'hidden',
  },
  shimmerBatch: {
    width: '50%',
    height: 13,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginBottom: 5,
    overflow: 'hidden',
  },
  shimmerMonth: {
    width: '60%',
    height: 13,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  shimmerRightContainer: {
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },
  shimmerPrice: {
    width: 60,
    height: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  shimmerDate: {
    width: 100,
    height: 13,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  viewBtnContainer: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  shimmerViewBtn: {
    width: 130,
    height: 45,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  shimmerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: colors.gray30,
  },
});

export default ShimmerFeesList;