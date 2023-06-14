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
  BottomSheetSelectState,
  BottomSheetSelectCity,
} from '../components';

import {useAppDispatch, useAppSelector, useNavigationHook} from '../hooks';
import {useAsyncStorage} from '../hooks/useAsyncStorage';
import {setToken} from '../store/reducer/auth/actions';
import {BottomSheetSelectAgeCategory} from '../components/molecules/BottomSheetSelectAgeCategory/BottomSheetSelectAgeCategory';
import {BottomSheetSelectSellType} from '../components/molecules/BottomSheetSelectSellType/BottomSheetSelectSellType';
import {BottomSheetSelectClassification} from '../components/molecules/BottomSheetSelectClassification/BottomSheetSelectClassification';

const Stack = createNativeStackNavigator();

export const RouterApp = () => {
  const dispatch = useAppDispatch();
  const {goToRouter} = useNavigationHook();

  const {value, loadingValue} = useAsyncStorage();
  const {token, isLogged} = useAppSelector(state => state.auth);

  let initialRoute = 'LoadingScreen';

  let isUserLogged = token && isLogged;
  let isExistToken = !!value;

  React.useEffect(() => {
    if (!loadingValue) {
      if (isExistToken || isUserLogged) {
        dispatch(setToken(value));
        goToRouter('DashboardBottomNavigation');
      } else {
        goToRouter('SplashScreen');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingValue]);

  return (
    <>
      <Stack.Navigator
        initialRouteName={'SplashScreen'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      </Stack.Navigator>
    </>
  );
};

export const RouterApp2 = () => {
  const dispatch = useAppDispatch();
  const {goToRouter} = useNavigationHook();

  const {value, loadingValue} = useAsyncStorage();
  const {token, isLogged} = useAppSelector(state => state.auth);

  let initialRoute = 'LoadingScreen';

  let isUserLogged = token && isLogged;
  let isExistToken = !!value;

  React.useEffect(() => {
    if (!loadingValue) {
      if (isExistToken || isUserLogged) {
        dispatch(setToken(value));
        goToRouter('DashboardBottomNavigation');
      } else {
        goToRouter('SplashScreen');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingValue]);

  return (
    <>
      <Stack.Navigator
        initialRouteName={'SplashScreen'}
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
      <BottomSheetSelectAnimalType defaultSize={120} />

      <BottomSheetSelectAnimalSex defaultSize={120} />
      <BottomSheetSelectAnimalBreed defaultSize={280} />

      <BottomSheetSelectState defaultSize={160} />
      <BottomSheetSelectCity defaultSize={160} />
      <BottomSheetSelectAgeCategory defaultSize={120} />

      <BottomSheetSelectSellType defaultSize={120} />
      <BottomSheetSelectClassification defaultSize={120} />
    </>
  );
};
