import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import Toast from 'react-native-toast-message';
import {toastConfig} from '../../utils/ToastsConfig';

const BackgroundView = ({children}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {children}
        <View style={styles.toastContainer}>
          <Toast config={toastConfig} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
  },
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
  },
  toastContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
  },
});

export default BackgroundView;
