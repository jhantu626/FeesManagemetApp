import {createContext, useContext, useEffect, useState} from 'react';
import {authService} from '../services/AuthService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [authToken, setAuthToken] = useState();

  const login = async ({authToken}) => {
    try {
      setAuthToken(authToken);
      await AsyncStorage.setItem('authToken', authToken);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('authToken');
      setAuthToken(null);
    } catch (error) {
      console.error(error);
    }
  };

  const check = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      setAuthToken(token);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    check();
  }, [authToken]);

  return (
    <AuthContext.Provider value={{authToken, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    return new Error('context not found');
  }

  return authContext;
};

export {useAuth};

export default AuthProvider;
