import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BackgorundView, SecondaryHeader, StudentList} from '../../components';
import {useAuth} from '../../contexts/AuthContext';
import {colors} from '../../utils/colors';
import fonts from '../../utils/fonts';

const Student = () => {
  const {authToken} = useAuth();
  return (
    <BackgorundView>
      <SecondaryHeader title="Student" isParent={true}/>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.text}>Student's List</Text>
            <Image
              style={styles.image}
              source={require('./../../../assets/images/student/student-list-icon.webp')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.text}>New Register</Text>
            <Image
              style={styles.image}
              source={require('./../../../assets/images/student/new-register-list-icon.webp')}
            />
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 10}}>
          <StudentList authToken={authToken} />
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
    fontFamily: fonts.semibold
  }
});

export default Student;
