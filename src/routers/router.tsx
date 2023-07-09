import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DashboardBottomNavigation} from './bottom.router';

import {
  SplashScreen,
  OnboardingScreen,
  SignInOptionScreen,
  SignInScreen,
  SignUpScreen,
  RecoveryAccountScreen,
  EditProfileScreen,
  AddProductScreen,
  ProfileChangerPasswordScreen,
  DetailProductScreen,
  EditProductScreen,
  SellerScreen,
} from '../screens/';

import {
  BottomSheetSelectAnimalType,
  BottomSheetSelectAnimalSex,
  BottomSheetSelectAnimalBreed,
  BottomSheetSelectState,
  BottomSheetSelectCity,
} from '../components';

import {BottomSheetSelectAgeCategory} from '../components/molecules/BottomSheetSelectAgeCategory/BottomSheetSelectAgeCategory';
import {BottomSheetSelectSellType} from '../components/molecules/BottomSheetSelectSellType/BottomSheetSelectSellType';
import {BottomSheetSelectClassification} from '../components/molecules/BottomSheetSelectClassification/BottomSheetSelectClassification';
import {useAppSelector} from '../hooks';

const Stack = createNativeStackNavigator();

export const RouterApp = () => {
  const {token} = useAppSelector(state => state.auth);

  let initialRouter = token ? 'DashboardBottomNavigation' : 'SplashScreen';

  return (
    <>
      <Stack.Navigator
        initialRouteName={initialRouter}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />

        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />

        <Stack.Screen
          name="SignInOptionScreen"
          component={SignInOptionScreen}
        />

        <Stack.Screen name="SignInScreen" component={SignInScreen} />

        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

        <Stack.Screen
          name="RecoveryAccountScreen"
          component={RecoveryAccountScreen}
        />

        <Stack.Screen
          name="DashboardBottomNavigation"
          component={DashboardBottomNavigation}
        />

        <Stack.Screen
          name="DetailProductScreen"
          component={DetailProductScreen}
        />

        <Stack.Screen name="AddProductScreen" component={AddProductScreen} />
        <Stack.Screen name="EditProductScreen" component={EditProductScreen} />

        <Stack.Screen name="SellerScreen" component={SellerScreen} />

        <Stack.Screen
          name="ProfileChangerPasswordScreen"
          component={ProfileChangerPasswordScreen}
        />

        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      </Stack.Navigator>

      <BottomSheetSelectAnimalType defaultSize={120} />

      <BottomSheetSelectAnimalBreed defaultSize={280} />

      <BottomSheetSelectClassification defaultSize={120} />

      <BottomSheetSelectAgeCategory defaultSize={120} />

      <BottomSheetSelectAnimalSex defaultSize={120} />

      <BottomSheetSelectSellType defaultSize={120} />

      <BottomSheetSelectState defaultSize={160} />
      <BottomSheetSelectCity defaultSize={160} />
    </>
  );
};
