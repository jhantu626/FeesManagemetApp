import {NavigationContainer} from '@react-navigation/native';
import {AuthHome} from './screens';
import {createStackNavigator} from '@react-navigation/stack';

const App = () => {
  const Stack = createStackNavigator();

  const AuthStack = () => {
    return (
      <Stack.Navigator initialRouteName="AuthHome">
        <Stack.Screen
          name="AuthHome"
          component={AuthHome}
          options={{
            headerShown: false,
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
