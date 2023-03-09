import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DashboardBottomNavigation} from './bottom.router';

import {
  SignInSocialScreen,
  SignInEmailScreen,
  SignUpScreen,
  RecoveryAccountScreen,
  EditProfileScreen,
  AddProductScreen,
} from '../screens/';

const Stack = createNativeStackNavigator();

export const RouterApp = () => {
  return (
    <Stack.Navigator
      initialRouteName={'DashboardBottomNavigation'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignInSocialScreen" component={SignInSocialScreen} />

      <Stack.Screen name="SignInEmailScreen" component={SignInEmailScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

      <Stack.Screen
        name="RecoveryAccountScreen"
        component={RecoveryAccountScreen}
      />

      <Stack.Screen
        name="DashboardBottomNavigation"
        component={DashboardBottomNavigation}
      />

      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen name="AddProductScreen" component={AddProductScreen} />
    </Stack.Navigator>
  );
};
