import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SearchFoods, {
  SearchFoodsHeader,
  SearchFoodsHeaderLeft,
} from '../SearchFoods';
import DrawerNavigator from './DrawerNavigator';

const Router: React.FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Group screenOptions={{animation: 'slide_from_right'}}>
        <Stack.Screen
          name="SearchFoods"
          component={SearchFoods}
          options={{
            headerLeft: SearchFoodsHeaderLeft,
            headerTitle: SearchFoodsHeader,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: '#EDEDED',
            },
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Router;
