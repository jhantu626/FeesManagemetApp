import {NavigationContainer} from '@react-navigation/native';
import {AuthHome, SplashScreen} from './screens';
import {createStackNavigator} from '@react-navigation/stack';

const App = () => {
  const Stack = createStackNavigator();

  const AuthStack = () => {
    return (
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false, animation: 'scale_from_center'}}
        />
        <Stack.Screen
          name="AuthHome"
          component={AuthHome}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
      </Stack.Navigator>
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
