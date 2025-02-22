import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AnalyseComponent, BackgorundView, MainHeader} from '../../components';

const Home = () => {
  return (
    <BackgorundView>
      <MainHeader />
      <View style={styles.container}>
        <AnalyseComponent />
      </View>
    </BackgorundView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
