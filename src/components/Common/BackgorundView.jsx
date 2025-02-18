import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';

const BackgorundView = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.ScrollView}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
  },
  ScrollView: {
    flexGrow: 1,
  },
});

export default BackgorundView;
