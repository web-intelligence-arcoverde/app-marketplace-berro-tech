import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignInSocial, SignInDefault, SignUpScreen} from '../screens/';

const Stack = createNativeStackNavigator();

export const RouterApp = () => {
  return (
    <Stack.Navigator
      initialRouteName={'SignUpScreen'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignInSocial" component={SignInSocial} />
      <Stack.Screen name="SignInDefault" component={SignInDefault} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
};
