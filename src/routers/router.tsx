import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignUpSocial, SignUpDefault} from '../screens/';

const Stack = createNativeStackNavigator();

export const RouterApp = () => {
  return (
    <Stack.Navigator
      initialRouteName={'SignUpDefault'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignUpSocial" component={SignUpSocial} />
      <Stack.Screen name="SignUpDefault" component={SignUpDefault} />
    </Stack.Navigator>
  );
};
