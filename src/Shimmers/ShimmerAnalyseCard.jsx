import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { colors } from '../utils/colors';

const ShimmerAnalyseCard = () => {
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
      {/* Top Container */}
      <View style={styles.topContainer}>
        <View style={styles.topContainerSubContainer}>
          <View style={styles.shimmerText}>
            <Animated.View
              style={[
                styles.shimmerOverlay,
                { transform: [{ translateX }] },
              ]}
            />
          </View>
          <View style={styles.shimmerIcon}>
            <Animated.View
              style={[
                styles.shimmerOverlay,
                { transform: [{ translateX }] },
              ]}
            />
          </View>
        </View>
        <View style={styles.shimmerDescription}>
          <Animated.View
            style={[
              styles.shimmerOverlay,
              { transform: [{ translateX }] },
            ]}
          />
        </View>
      </View>

      {/* Bottom Container */}
      <View style={styles.bottomContainer}>
        <View style={styles.shimmerBottomText}>
          <Animated.View
            style={[
              styles.shimmerOverlay,
              { transform: [{ translateX }] },
            ]}
          />
        </View>
        <View style={styles.shimmerPercentageContainer}>
          <Animated.View
            style={[
              styles.shimmerOverlay,
              { transform: [{ translateX }] },
            ]}
          />
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
  shimmerText: {
    width: 100,
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  shimmerIcon: {
    width: 30,
    height: 30,
    backgroundColor: '#e0e0e0',
    borderRadius: 15,
    overflow: 'hidden',
  },
  shimmerDescription: {
    width: '80%',
    height: 13,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  shimmerBottomText: {
    width: 70,
    height: 12,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  shimmerPercentageContainer: {
    width: 50,
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
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

export default ShimmerAnalyseCard;