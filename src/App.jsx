import {NavigationContainer} from '@react-navigation/native';
import {
  AuthHome,
  Batch,
  Fees,
  FeesListScreen,
  Home,
  Login,
  Otp,
  Register,
  SplashScreen,
  Student,
  StudentRegister,
} from './screens';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AuthProvider, {useAuth} from './contexts/AuthContext';
import {colors} from './utils/colors';

// Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';

import fonts from './utils/fonts';
import {Image, Pressable} from 'react-native';

const App = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const AuthStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            animation: 'reveal_from_bottom',
            transitionSpec: {
              open: {
                animation: 'timing',
                config: {
                  duration: 1000,
                },
              },
            },
          }}
        />
        <Stack.Screen
          name="AuthHome"
          component={AuthHome}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{
            animation: 'slide_from_right',
            transitionSpec: {
              open: {
                animation: 'timing',
                config: {
                  duration: 300,
                },
              },
              close: {
                animation: 'timing',
                config: {
                  duration: 300,
                },
              },
            },
          }}
        />
      </Stack.Navigator>
    );
  };

  const FeesStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="Fees"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="Fees" component={Fees} />
        <Stack.Screen name="FeesList" component={FeesListScreen} />
      </Stack.Navigator>
    );
  };

  const StudentStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="StudentRegister"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Student" component={Student} />
        <Stack.Screen name="StudentRegister" component={StudentRegister} />
      </Stack.Navigator>
    );
  };

  const AppStack = () => {
    return (
      <Tab.Navigator
        initialRouteName="Student"
        screenOptions={{
          animation: 'shift',
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 11,
            fontFamily: fonts.semibold,
          },
          tabBarStyle: {
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.secondary,
          },
          tabBarButton: props => (
            <>
              <Pressable
                {...props}
                android_ripple={{color: colors.secondary}}
              />
              {props.accessibilityState.selected && (
                <Image
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    height: 10,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  }}
                  source={require('./../assets/images/dashboard/menu-active.webp')}
                />
              )}
            </>
          ),
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({size, focus, color}) => {
              return <AntDesign name="home" size={24} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Student"
          component={StudentStack}
          options={{
            tabBarIcon: ({size, focus, color}) => {
              return (
                <FontAwesome5 name="user-graduate" size={24} color={color} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Fees"
          component={FeesStack}
          options={{
            tabBarIcon: ({size, focus, color}) => {
              return <FontAwesome5 name="wallet" size={24} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Batch"
          component={Batch}
          options={{
            tabBarIcon: ({size, focus, color}) => {
              return <Octicons name="three-bars" size={24} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    );
  };

  const AppNav = () => {
    const {authToken} = useAuth();
    return (
      <NavigationContainer>
        {authToken ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    );
  };

  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
};

export default App;
