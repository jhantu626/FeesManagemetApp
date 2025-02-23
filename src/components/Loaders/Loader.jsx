import React from 'react';
import { View, Animated, Easing, StyleSheet, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useEffect, useRef } from 'react';

const Loader = () => {
  const animationValues = useRef(
    Array(6).fill(null).map(() => new Animated.Value(0))
  ).current;

  useEffect(() => {
    const animations = animationValues.map((value, index) => {
      const delay = index * 0.3; // Adjust delay for each page
      return Animated.timing(value, {
        toValue: 1,
        duration: 3000, // Consistent with CSS duration
        easing: Easing.linear,
        useNativeDriver: false,
        delay: delay * 1000,
      });
    });

    const resetAnimations = animationValues.map((value) =>
      Animated.timing(value, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
        delay: 1000, // Add a delay before resetting
      })
    );

    Animated.loop(Animated.sequence([...animations, ...resetAnimations])).start();

    return () => {
      animationValues.forEach((value) => value.stopAnimation());
    };
  }, []);

  const rotateYInterpolations = animationValues.map((value, index) => {
    let inputRange;
    let outputRange;

    switch (index) {
      case 1:
        inputRange = [0, 0.2, 0.35, 1];
        outputRange = ['180deg', '0deg', '0deg', '180deg'];
        break;
      case 2:
        inputRange = [0, 0.35, 0.5, 1];
        outputRange = ['180deg', '0deg', '0deg', '180deg'];
        break;
      case 3:
        inputRange = [0, 0.5, 0.65, 1];
        outputRange = ['180deg', '0deg', '0deg', '180deg'];
        break;
      case 4:
        inputRange = [0, 0.65, 0.8, 1];
        outputRange = ['180deg', '0deg', '0deg', '180deg'];
        break;
      case 5:
        inputRange = [0, 0.8, 0.95, 1];
        outputRange = ['180deg', '0deg', '0deg', '180deg'];
        break;
      default:
        inputRange = [0, 0.2, 0.35, 1];
        outputRange = ['0deg', '180deg', '180deg', '0deg'];
    }
    return value.interpolate({
      inputRange: inputRange,
      outputRange: outputRange,
    });
  });

  const opacityInterpolations = animationValues.map((value, index) => {
    let inputRange;
    let outputRange;
    switch (index) {
      case 1:
        inputRange = [0, 0.2, 0.35, 0.5, 1];
        outputRange = [0, 1, 1, 0, 0];
        break;
      case 2:
        inputRange = [0, 0.35, 0.5, 0.65, 1];
        outputRange = [0, 1, 1, 0, 0];
        break;
      case 3:
        inputRange = [0, 0.5, 0.65, 0.8, 1];
        outputRange = [0, 1, 1, 0, 0];
        break;
      case 4:
        inputRange = [0, 0.65, 0.8, 0.95, 1];
        outputRange = [0, 1, 1, 0, 0];
        break;
      case 5:
        inputRange = [0, 0.8, 0.95, 1];
        outputRange = [0, 1, 1, 0];
        break;
      default:
        inputRange = [0, 0.2, 1];
        outputRange = [1, 1, 1];
    }
    return value.interpolate({
      inputRange: inputRange,
      outputRange: outputRange,
    });
  });

  return (
    <View style={styles.container}>
      <View style={styles.loader}>
        <View style={styles.loaderInner}>
          <View style={styles.absoluteShadow} />
          <View style={styles.absoluteShadow2} />
          <View style={styles.pageContainer}>
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <Animated.View
                  key={index}
                  style={[
                    styles.page,
                    {
                      transform: [{ rotateY: rotateYInterpolations[index] }],
                      opacity: opacityInterpolations[index],
                      backgroundColor:
                        index === 0
                          ? 'rgba(255, 255, 255, 0.36)'
                          : 'rgba(255, 255, 255, 0.52)',
                    },
                  ]}
                >
                  <Svg width="90" height="120" fill="#6C7486">
                    <Path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z" />
                  </Svg>
                </Animated.View>
              ))}
          </View>
        </View>
        <Text style={styles.loadingText}>Loading</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loader: {
    width: 200,
    height: 140,
    position: 'relative',
  },
  loaderInner: {
    width: '100%',
    height: '100%',
    borderRadius: 13,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#23C4F8',
    shadowColor: 'rgba(39, 94, 254, 0.28)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 5,
  },
  absoluteShadow: {
    position: 'absolute',
    bottom: 8,
    left: 4,
    width: 120,
    height: 20,
    backgroundColor: 'rgba(0,0,0,0)',
    shadowColor: 'rgba(39, 94, 254, 0.28)',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 1,
    shadowRadius: 12,
    transform: [{ rotate: '-6deg' }],
  },
  absoluteShadow2: {
    position: 'absolute',
    bottom: 8,
    right: 4,
    width: 120,
    height: 20,
    backgroundColor: 'rgba(0,0,0,0)',
    shadowColor: 'rgba(39, 94, 254, 0.28)',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 1,
    shadowRadius: 12,
    transform: [{ rotate: '6deg' }],
  },
  pageContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    perspective: 600,
  },
  page: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 90,
    height: 120,
    transformOrigin: '100% 50%',
    backfaceVisibility: 'hidden',
  },
  loadingText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#6C7486',
  },
});

export default Loader;