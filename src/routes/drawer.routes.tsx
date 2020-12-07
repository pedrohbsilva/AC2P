import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import * as React from 'react';

import { DrawerParamList, EvaluationParamList, MapParamList, ProfileParamList } from '../../types';
import Map from '../pages/Map';
import DrawerCustom from '../components/DrawerContent';
import Profile from '../pages/Profile';
import Evaluation from '../pages/Evaluation';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerRoutes: React.FC = () => {
  return (
    <Drawer.Navigator
    drawerContent={props => <DrawerCustom {...props} />}
    screenOptions={{ headerShown: false }}
    >
      
      <Drawer.Screen
        name="Map"
        component={MapNavigator}/>
      <Drawer.Screen
        name="Profile"
        component={ProfileNavigator}/>
      <Drawer.Screen
        name="Evaluation"
        component={EvaluationNavigator}/>
    </Drawer.Navigator>
  );
}

const MapStack = createStackNavigator<MapParamList>();

function MapNavigator() {
  return (
    <MapStack.Navigator>
      <MapStack.Screen
        name="MapScreen"
        options={{title: 'AC2P Driver'}}
        component={Map}
      />
    </MapStack.Navigator>
  )
}

const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        options={{title: 'AC2P Driver'}}
        component={Profile}
      />
    </ProfileStack.Navigator>
  )
}

const EvaluationStack = createStackNavigator<EvaluationParamList>();

function EvaluationNavigator() {
  return (
    <EvaluationStack.Navigator>
      <EvaluationStack.Screen
        name="EvaluationScreen"
        options={{title: 'AC2P Driver'}}
        component={Evaluation}
      />
    </EvaluationStack.Navigator>
  )
}
export default DrawerRoutes;