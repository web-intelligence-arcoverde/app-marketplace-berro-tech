import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {EditProfileScreen} from '../screens';

const Stack = createNativeStackNavigator();

export const RouterApp = () => {
  return (
    <Stack.Navigator
      initialRouteName={'DashboardBottomNavigation'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};
