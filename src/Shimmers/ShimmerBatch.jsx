import React, {useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors} from '../utils/colors';

const ShimmerBatch = () => {
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
  }, [shimmerAnimation]);

  const translateX = shimmerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-200, 200], // Adjusted for wider container
  });

  return (
    <View style={styles.container}>
      {/* Header Container */}
      <View style={styles.headerContainer}>
        <View style={styles.shimmerHeaderTitle}>
          <Animated.View
            style={[styles.shimmerOverlay, {transform: [{translateX}]}]}
          />
        </View>
        <Entypo size={20} color={colors.secondary} name="dots-three-vertical" />
      </View>

      {/* Body Container */}
      <View style={styles.containerBody}>
        {[1, 2, 3, 4, 5].map((_, index) => (
          <View key={index} style={styles.elements}>
            <View style={styles.shimmerKey}>
              <Animated.View
                style={[styles.shimmerOverlay, {transform: [{translateX}]}]}
              />
            </View>
            <View style={styles.shimmerValue}>
              <Animated.View
                style={[styles.shimmerOverlay, {transform: [{translateX}]}]}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 280,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowColor: colors.secondary,
    elevation: 8,
    marginBottom: 25,
    padding: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#B3B3B3',
  },
  headerContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.gray30,
    borderRadius: 10,
  },
  shimmerHeaderTitle: {
    width: 150,
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  containerBody: {
    paddingHorizontal: 5,
    marginVertical: 20,
    flexDirection: 'column',
    gap: 15,
  },
  elements: {
    flexDirection: 'row',
    gap: 10,
  },
  shimmerKey: {
    width: 80,
    height: 14,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  shimmerValue: {
    width: 180,
    height: 14,
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

export default ShimmerBatch;
