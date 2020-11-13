import React, {
  createContext, useCallback, useContext, useState, useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View } from 'react-native';
import api from '../utils/api';

interface AuthState{
  token: string;
  user:User;
}

interface SignInCredentials{
  email: string;
  password:string;
}

interface AuthContextData{
  userInfo:User;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  token: string;
}
interface User {
  id: string;
  name: string;
  email: string;
  permission_id: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
        const token = await AsyncStorage.getItem('@token');
        const user = await AsyncStorage.getItem('@user');
        if (token && user) {
          api.defaults.headers.authorization = `Bearer ${token}`;
          setData({ token, user: JSON.parse(user) });
        }
      setLoading(false);
    }
    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });
    const { token, userInfo } = response.data;

      await AsyncStorage.multiSet([
        ['@token', token],
        ['@user', JSON.stringify(userInfo)],
      ]);
      api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, userInfo });
  }, []);

  const signOut = useCallback(async () => {

      await AsyncStorage.multiRemove([
        '@token',
        '@user',
      ]);
    setData({} as AuthState);
  }, []);
  if (loading) {
    return (
      <View style={{ flex: 1 }} />
    );
  }
  return (
    <AuthContext.Provider
      value={{
        userInfo: data.user, token: data.token, loading, signIn, signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('UseAuth must be used within a AuthProvider');
  }
  return context;
}
export { AuthProvider, useAuth };
