import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import BottomTabNavigator from '../BottomTabNavigator';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
        swipeEnabled: false,
        drawerStyle: {
          backgroundColor: '#FA4A0C',
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 88,
        },
      }}
      defaultStatus="open"
      drawerContent={DrawerContent}
      initialRouteName="BottomTabNavigator">
      <Drawer.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
