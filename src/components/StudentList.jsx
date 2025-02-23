import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../utils/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import fonts from '../utils/fonts';
import StudentListCard from './Cards/StudentListCard';
import {studentService} from '../services/StudentService';
import {DrawerLayout} from 'react-native-gesture-handler';

const StudentList = ({authToken}) => {
  const [students, setStudents] = useState([]);
  const fetchStudentData = async () => {
    try {
      const data = await studentService.getStudents({
        authToken: authToken,
        isRecent: true,
      });
      console.log(data);
      setStudents(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchStudentData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>Students List</Text>
        <TouchableOpacity style={styles.sortBtn}>
          <FontAwesome5
            name="sort-amount-down"
            size={24}
            color={colors.primary}
          />
          <Text style={styles.sortTxt}>Sort</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        {students.map((item, index) => {
          return (
            <StudentListCard
              name={item?.name}
              mobile={item?.phone}
              profileImage={item?.profilePic}
              key={index}
            />
          );
        })}
      </View>
      <View style={styles.viewBtnContainer}>
        <TouchableOpacity style={styles.viewBtn}>
          <Text style={styles.viewText}>View More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.secondary,
    borderRadius: 10,
    borderWidth: 0.7,
    borderColor: colors.gray30,
    paddingVertical: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '50',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomWidth: 0.7,
    borderBottomColor: colors.textOnGray,
  },
  titleText: {
    fontSize: 16,
    fontFamily: fonts.medium,
  },
  sortBtn: {
    flexDirection: 'row',
    width: 60,
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sortTxt: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.primary,
  },
  listContainer: {},
  viewBtnContainer: {
    width: '100%',
    marginVertical: 10,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBtn: {
    width: 130,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  viewText: {
    color: colors.primary,
    fontSize: 14,
    fontFamily: fonts.semibold,
  },
});

export default StudentList;
