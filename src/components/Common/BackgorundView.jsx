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
    position: 'absolute', // Position the toast absolutely
    top: 0, // Align to the top
    left: 0, // Align to the left
    right: 0, // Align to the right
    zIndex: 9999, // Set a very high zIndex
  },
});

export default BackgroundView;
