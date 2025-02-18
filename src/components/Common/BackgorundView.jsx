import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';

const BackgroundView = ({children}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {children}
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
});

export default BackgroundView;