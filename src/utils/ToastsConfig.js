import {View, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Use any icon library
import fonts from './fonts';

const {width} = Dimensions.get('window');

const toastConfig = {
  /*
   * Success Toast
   */
  success: ({text1}) => (
    <View
      style={{
        width: 'auto', // 80% of screen width
        height: 40, // Fixed height
        backgroundColor: '#4CAF50', // Green background
        borderRadius: 20, // Border radius
        flexDirection: 'row', // Align icon and text horizontally
        alignItems: 'center', // Center vertically
        paddingHorizontal: 15,
        justifyContent: 'center', // Padding for text
      }}>
      <Icon name="check-circle" size={28} color="white" /> {/* Success icon */}
      <Text style={{color: 'white', marginLeft: 10, fontFamily: fonts.medium}}>
        {text1}
      </Text>
    </View>
  ),

  /*
   * Error Toast
   */
  error: ({text1}) => (
    <View
      style={{
        width: 'auto', // 80% of screen width
        height: 40, // Fixed height
        backgroundColor: '#FF5252', // Red background
        borderRadius: 20, // Border radius
        flexDirection: 'row', // Align icon and text horizontally
        alignItems: 'center', // Center vertically
        paddingHorizontal: 15,
        justifyContent: 'center',
      }}>
      <Icon name="times-circle" size={28} color="white" /> {/* Error icon */}
      <Text style={{color: 'white', marginLeft: 10, fontFamily: fonts.medium}}>
        {text1}
      </Text>
    </View>
  ),

  /*
   * Info Toast
   */
  info: ({text1}) => (
    <View
      style={{
        width: 'auto', // 80% of screen width
        height: 40, // Fixed height
        backgroundColor: '#2196F3', // Blue background
        borderRadius: 20, // Border radius
        flexDirection: 'row', // Align icon and text horizontally
        alignItems: 'center',
        justifyContent: 'center', // Center vertically
        paddingHorizontal: 15,
        // Padding for text
      }}>
      <Icon name="info-circle" size={28} color="white" /> {/* Info icon */}
      <Text style={{color: 'white', marginLeft: 10, fontFamily: fonts.medium}}>
        {text1}
      </Text>
    </View>
  ),
};

export {toastConfig};
