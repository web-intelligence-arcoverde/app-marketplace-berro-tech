import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DashboardBottomNavigation} from './bottom.router';

import {
  SplashScreen,
  OnboardingScreen,
  SignInOptionScreen,
  SignInEmailScreen,
  SignUpScreen,
  RecoveryAccountScreen,
  EditProfileScreen,
  AddProductScreen,
  ProfileChangerPasswordScreen,
  DetailProductScreen,
  SellerScreen,
} from '../screens/';

import {
  BottomSheetSelectAnimalType,
  BottomSheetSelectAnimalSex,
  BottomSheetSelectAnimalBreed,
} from '../components';

const Stack = createNativeStackNavigator();

export const RouterApp = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={'DashboardBottomNavigation'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />

        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />

        <Stack.Screen
          name="SignInOptionScreen"
          component={SignInOptionScreen}
        />

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

        <Stack.Screen
          name="ProfileChangerPasswordScreen"
          component={ProfileChangerPasswordScreen}
        />

        <Stack.Screen name="AddProductScreen" component={AddProductScreen} />

        <Stack.Screen
          name="DetailProductScreen"
          component={DetailProductScreen}
        />

        <Stack.Screen name="SellerScreen" component={SellerScreen} />
      </Stack.Navigator>
      <BottomSheetSelectAnimalType defaultSize={180} />
      <BottomSheetSelectAnimalSex defaultSize={160} />
      <BottomSheetSelectAnimalBreed defaultSize={280} />
    </>
  );
};
