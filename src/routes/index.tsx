import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import AuthRoutes from './auth.routes';
import { useAuth } from '../hooks/auth';
import DrawerRoutes from './drawer.routes';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
  return user ? <DrawerRoutes /> : <AuthRoutes />;
  //return <AuthRoutes />;
};

export default Routes;
