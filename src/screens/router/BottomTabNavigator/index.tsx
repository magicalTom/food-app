import History from '@/screens/History';
import Self from '@/screens/Self';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Box} from 'native-base';
import React from 'react';
import Favorite from '../../Favorite';
import Home, {HomeHeaderLeft, HomeHeaderRight} from '../../Home';
import FavoriteTabIcon from './TabBarIcon/FavoriteTabIcon';
import HistoryTabIcon from './TabBarIcon/HistoryTabIcon';
import HomeTabIcon from './TabBarIcon/HomeTabIcon';
import SelfTabIcon from './TabBarIcon/SelfTabIcon';

const Tab = createBottomTabNavigator();

const Back = () => <Box bgColor={'#EDEDED'} w={'full'} h={'full'} />;

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarBackground: Back,
        tabBarShowLabel: false,
        tabBarStyle: {borderTopWidth: 0},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: HomeTabIcon,
          headerTitle: '',
          headerLeft: HomeHeaderLeft,
          headerRight: HomeHeaderRight,
          headerBackground: Back,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: FavoriteTabIcon,
        }}
      />
      <Tab.Screen
        name="Self"
        component={Self}
        options={{
          tabBarIcon: SelfTabIcon,
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: HistoryTabIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
