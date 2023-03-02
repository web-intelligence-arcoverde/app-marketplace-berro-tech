import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  SignInSocial,
  SignInDefault,
  SignUpScreen,
  RecoveryAccountScreen,
} from '../screens/';

const Stack = createNativeStackNavigator();

export const RouterApp = () => {
  return (
    <Stack.Navigator
      initialRouteName={'RecoveryAccountScreen'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignInSocial" component={SignInSocial} />
      <Stack.Screen name="SignInDefault" component={SignInDefault} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

      <Stack.Screen
        name="RecoveryAccountScreen"
        component={RecoveryAccountScreen}
      />
    </Stack.Navigator>
  );
};
