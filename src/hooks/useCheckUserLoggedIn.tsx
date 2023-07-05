import {useEffect} from 'react';
import {useAsyncStorage, useNavigationHook} from '.';

import {useRoute} from '@react-navigation/native';

const authRouters = [
  'DashboardBottomNavigation',
  'DetailProductScreen',
  'Home',
  'Negócios',
  'Perfil',
  'AddProductScreen',
  'SellerScreen',
  'ProfileChangerPasswordScreen',
  'EditProfileScreen',
  'EditProductScreen',
];

export const useCheckUserLoggedIn = () => {
  const {getData, value, validToken} = useAsyncStorage();

  const {goToRouter} = useNavigationHook();

  const {name} = useRoute();

  useEffect(() => {
    getData('@token');
  }, [getData, name]);

  useEffect(() => {
    if (validToken) {
      const timer = setTimeout(() => {
        if (!authRouters.includes(name)) {
          goToRouter('DashboardBottomNavigation');
        }
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        if (!authRouters.includes(name)) {
          goToRouter('OnboardingScreen');
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [goToRouter, name, validToken, value]);

  return {};
};
