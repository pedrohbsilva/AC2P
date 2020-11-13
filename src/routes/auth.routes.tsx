import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { Container } from './styles';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Map from '../pages/Map';

const Auth = createStackNavigator();
const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#F3F5F5' } }}
  >
        <Auth.Screen name="SignIn" component={SignIn} />
        <Auth.Screen name="SignUp" component={SignUp} />
        <Auth.Screen name="Map" component={Map} />


  </Auth.Navigator>
);

export default AuthRoutes;
