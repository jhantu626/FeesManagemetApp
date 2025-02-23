import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated, Easing} from 'react-native';
import {colors} from '../utils/colors';

const ShimmerStudentList = () => {
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
        <View style={styles.shimmerSortBtn} />
      </View>
      <View style={styles.listContainer}>
        {[1, 2, 3].map((item, index) => (
          <View key={index} style={styles.shimmerCard}>
            {/* Left Side: Profile Picture */}
            <View style={styles.shimmerProfilePic}>
              <Animated.View
                style={[
                  styles.shimmerOverlay,
                  {transform: [{translateX}]},
                ]}
              />
            </View>
            {/* Middle: Name and Phone Number */}
            <View style={styles.shimmerTextContainer}>
              <View style={styles.shimmerName}>
                <Animated.View
                  style={[
                    styles.shimmerOverlay,
                    {transform: [{translateX}]},
                  ]}
                />
              </View>
              <View style={styles.shimmerPhone}>
                <Animated.View
                  style={[
                    styles.shimmerOverlay,
                    {transform: [{translateX}]},
                  ]}
                />
              </View>
            </View>
            {/* Right Side: Call Button */}
            <View style={styles.shimmerCallBtn}>
              <Animated.View
                style={[
                  styles.shimmerOverlay,
                  {transform: [{translateX}]},
                ]}
              />
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
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0.7,
    borderColor: '#e0e0e0',
    paddingVertical: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomWidth: 0.7,
    borderBottomColor: '#e0e0e0',
  },
  shimmerTitle: {
    width: 100,
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  shimmerSortBtn: {
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
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.7,
    borderBottomColor: colors.gray30,
    paddingVertical: 10,
  },
  shimmerProfilePic: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#e0e0e0',
    overflow: 'hidden',
  },
  shimmerTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  shimmerName: {
    width: '60%',
    height: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginBottom: 5,
    overflow: 'hidden',
  },
  shimmerPhone: {
    width: '40%',
    height: 13,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  shimmerCallBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    overflow: 'hidden',
  },
  viewBtnContainer: {
    width: '100%',
    marginVertical: 10,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
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

export default ShimmerStudentList;