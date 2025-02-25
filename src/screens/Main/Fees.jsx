import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BackgorundView, FeesList, SecondaryHeader, StudentList} from '../../components';
import {useAuth} from '../../contexts/AuthContext';
import {colors} from '../../utils/colors';
import fonts from '../../utils/fonts';

const Fees = () => {
  const {authToken} = useAuth();
  return (
    <BackgorundView>
      <SecondaryHeader title="Fees" />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.text}>Fees Recived</Text>
            <Image
              style={styles.image}
              source={require('./../../../assets/images/dashboard/fees-receive.webp')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.text}>Fees List</Text>
            <Image
              style={styles.image}
              source={require('./../../../assets/images/dashboard/fees-list.webp')}
            />
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 10}}>
          <FeesList authToken={authToken} />
        </View>
      </ScrollView>
    </BackgorundView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  btnContainer: {
    width: '48%',
    height: 50,
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.7,
    borderColor: colors.gray30,
    borderRadius: 5,
  },
  image: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.semibold,
  },
});

export default Fees;
