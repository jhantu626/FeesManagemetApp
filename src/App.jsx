import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AuthHome} from './screens';

const App = () => {
  const isLogin = false;

  const stack = createStackNavigator();

  const AuthStack = () => {
    return (
      <stack.Navigator>
        <stack.Screen name="AuthHome" component={AuthHome} />
      </stack.Navigator>
    );
  };

  const AppStack = () => {
    return null;
  };

  const AppNav = () => {
    return (
      <NavigationContainer>
        isLogin?
        <AuthStack />:<AuthStack />
      </NavigationContainer>
    );
  };

  return <AppNav />;
};

export default App;
