import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  SignInSocialScreen,
  SignInEmailScreen,
  SignUpScreen,
  RecoveryAccountScreen,
} from '../screens/';

const Stack = createNativeStackNavigator();

export const RouterApp = () => {
  return (
    <Stack.Navigator
      initialRouteName={'SignInEmailScreen'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignInSocialScreen" component={SignInSocialScreen} />

      <Stack.Screen name="SignInEmailScreen" component={SignInEmailScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

      <Stack.Screen
        name="RecoveryAccountScreen"
        component={RecoveryAccountScreen}
      />
    </Stack.Navigator>
  );
};
