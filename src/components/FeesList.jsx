import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';

// Icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../utils/colors';
import fonts from '../utils/fonts';
import FeesListCard from './Cards/FeesListCard';
import {ShimmerFeesList} from '../Shimmers';
import {feesService} from '../services/FeesService';
import {useFocusEffect} from '@react-navigation/native';

const FeesList = ({authToken}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [feesData, setFeesData] = useState([]);

  const fetchFeesDetails = async () => {
    try {
      setIsLoading(true);
      const data = await feesService.feesHistoryInRange({
        authToken: authToken,
        pageNo: 0,
        pageSize: 6,
      });
      setFeesData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFeesDetails();
  }, []);

  return isLoading ? (
    <ShimmerFeesList />
  ) : (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>Fees List</Text>
        {feesData.length > 0 && (
          <TouchableOpacity style={styles.filterContainer}>
            <FontAwesome name="filter" size={28} color={colors.primary} />
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        )}
      </View>
      {feesData.length > 0 ? (
        <>
          <View style={styles.listContainer}>
            {feesData.map((item, index) => {
              return (
                <FeesListCard
                  name={item?.studentName}
                  batch={`Batch - ${item?.batchName}`}
                  description={item?.description}
                  fees={item?.amountPaid}
                  revicedAt={item?.paymentDate}
                />
              );
            })}
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.viewBtn}>
              <Text style={styles.viewTxt}>View More</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.notFoundContainer}>
          <Image
            style={styles.notFoundImage}
            resizeMode="contain"
            source={require('./../../assets/images/fees-not-found.webp')}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderColor: colors.gray30,
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 10,
  },
  headerContainer: {
    width: '100%',
    height: '50',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 16,
    fontFamily: fonts.medium,
  },
  filterContainer: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
  filterText: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.primary,
  },
  bottomContainer: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  viewBtn: {
    width: 130,
    height: 45,
    borderRadius: 5,
    borderWidth: 0.7,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTxt: {
    fontSize: 14,
    fontFamily: fonts.medium,
    color: colors.primary,
  },
  listContainer: {},
  notFoundContainer: {
    width: '100%',
    height: '280',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFoundImage: {
    width: 250,
    height: 250,
  },
});

export default FeesList;
