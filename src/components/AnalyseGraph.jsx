import React from 'react';
import {View, Dimensions, StyleSheet, Text} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {colors} from '../utils/colors';
import fonts from '../utils/fonts';

// Updated data for the line chart
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // X-axis labels (e.g., months)
  datasets: [
    {
      data: [500, 450, 600, 700, 900, 800], // Y-axis values (e.g., students enrolled)
      color: (opacity = 1) => colors.primary, // Use primary color (blue) for the line
      strokeWidth: 2, // Line thickness
    },
    {
      data: [200, 300, 400, 500, 600, 700], // Y-axis values for a second dataset (e.g., revenue)
      color: (opacity = 1) => '#FFC107', // Use a contrasting color (yellow) for the second line
      strokeWidth: 2,
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: colors.secondary, // Use secondary color (white)
  backgroundGradientTo: colors.secondary, // Use secondary color (white)
  color: (opacity = 1) => colors.primary, // Use primary color (blue) for labels
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Black labels
  strokeWidth: 2, // Line thickness
  propsForDots: {
    r: '4', // Dot radius
    strokeWidth: '2',
    stroke: colors.primary, // Dot border color
  },
};

const AnalyseGraph = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monthly Analysis</Text>
      <LineChart
        data={data}
        width={Dimensions.get('window').width - 40} // Adjust width to fit screen
        height={220}
        chartConfig={chartConfig}
        bezier // Smooth line curve
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: colors.secondary,
    borderRadius: 10,
  },
  title: {
    paddingHorizontal: 20,
    marginTop: 5,
    fontSize: 20,
    fontFamily: fonts.semibold,
    color: colors.primary,
    marginBottom: 10,
  },
});

export default AnalyseGraph;
