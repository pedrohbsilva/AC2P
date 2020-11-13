import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Map from '../pages/Map'
const App = createStackNavigator();
const AppRoutes: React.FC = () => {
  
    return (
      <App.Navigator
        screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#F3F5F5' } }}
      >
        <App.Screen name="Map" component={Map} />
      </App.Navigator>
    );
 
};

export default AppRoutes;
