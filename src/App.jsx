import {NavigationContainer} from '@react-navigation/native';
import {AuthHome, Home, Login, Otp, Register, SplashScreen} from './screens';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const App = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const AuthStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="Login"
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

  const AppStack = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    );
  };

  const AppNav = () => {
    return (
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    );
  };

  return <AppNav />;
};

export default App;
