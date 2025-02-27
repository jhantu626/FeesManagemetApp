import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BackgorundView, SecondaryHeader} from '../../components';
import {useAuth} from '../../contexts/AuthContext';
import {colors} from '../../utils/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import fonts from '../../utils/fonts';
import {ShimmerBatch} from '../../Shimmers';
import {teacherService} from '../../services/TeacherService';
import {formatMonthYear, formatTo12Hour} from '../../utils/common';

const Batch = () => {
  const {authToken} = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [batchData, setBatchData] = useState([]);
  const fetchBatchDetails = async () => {
    try {
      setIsLoading(true);
      const data = await teacherService.fetchBatches({authToken: authToken});
      setBatchData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBatchDetails();
  }, []);

  return (
    <BackgorundView>
      <SecondaryHeader
        title={'Batch List'}
        isBtn={true}
        btnText={'Create Batch'}
        isParent={true}
      />
      {isLoading ? (
        <View style={{padding: 10}}>
          {' '}
          {[0, 1].map((_, index) => (
            <ShimmerBatch key={index} />
          ))}
        </View>
      ) : (
        <ScrollView
          style={{flex: 1, margin: 10}}
          showsVerticalScrollIndicator={false}>
          {batchData.map((item, index) => (
            <View style={styles.container} key={index}>
              <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>{item.name}</Text>
                <TouchableOpacity>
                  <Entypo
                    size={20}
                    color={colors.secondary}
                    name="dots-three-vertical"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.containerBody}>
                <View style={styles.elements}>
                  <Text style={styles.key}>Class Duration:</Text>
                  <Text style={styles.value}>
                    {formatTo12Hour(item.startTime)} -{' '}
                    {formatTo12Hour(item.endTime)}
                  </Text>
                </View>
                <View style={styles.elements}>
                  <Text style={styles.key}>Days:</Text>
                  <Text style={[styles.value, {width: '85%'}]}>
                    {item?.days.join(', ')}
                  </Text>
                </View>
                <View style={styles.elements}>
                  <Text style={styles.key}>Duration:</Text>
                  <Text style={styles.value}>
                    {formatMonthYear(item.startYear, item.startMonth)} -{' '}
                    {formatMonthYear(item.endYear, item.endMonth)}
                  </Text>
                </View>
                <View style={styles.elements}>
                  <Text style={styles.key}>Monthly Fees:</Text>
                  <Text style={styles.value}>₹{item.monthlyFees}</Text>
                </View>
                <View style={styles.elements}>
                  <Text style={styles.key}>Monthly Exam Fees:</Text>
                  <Text style={styles.value}>₹{item?.monthlyExamFees}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </BackgorundView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 280,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    shadowOffset: {
      width: 500,
      height: 2,
    },
    elevation: 2,
    shadowOpacity: 0.1,
    shadowColor: '#000',
    marginBottom: 25,
    padding: 15,
    borderWidth: 1,
    borderColor: colors.gray30
  },
  headerContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderBottomWidth: 2,
    // borderBottomColor: colors.gray30,
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.secondary,
  },
  containerBody: {
    paddingHorizontal: 5,
    marginVertical: 20,
    flexDirection: 'column',
    gap: 1,
  },
  elements: {
    flexDirection: 'row',
    gap: 10,
  },
  key: {
    fontSize: 14,
    fontFamily: fonts.semibold,
    color: colors.primary,
  },
  value: {
    fontSize: 14,
    fontFamily: fonts.medium,
    color: colors.textOnGray,
  },
});

export default Batch;
