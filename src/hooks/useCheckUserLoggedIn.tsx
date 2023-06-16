import {useEffect} from 'react';
import {useAppDispatch, useAsyncStorage, useNavigationHook} from '.';
import {setToken} from '../store/reducer/auth/actions';
import {useRoute} from '@react-navigation/native';

const authRouters = [
  'DashboardBottomNavigation',
  'DetailProductScreen',
  'Home',
  'Negócios',
  'Perfil',
  'AddProductScreen',
  'SellerScreen',
];

export const useCheckUserLoggedIn = () => {
  const {getData, value, validToken} = useAsyncStorage();

  const {goToRouter} = useNavigationHook();

  const {name} = useRoute();

  const isSplashScreen = name === 'SplashScreen';
  const isValidToken = value && validToken;

  const dispatch = useAppDispatch();

  useEffect(() => {
    getData('@token');
  }, [getData]);

  useEffect(() => {
    if (isValidToken) {
      dispatch(setToken(value));
      const timer = setTimeout(() => {
        if (!authRouters.includes(name)) {
          goToRouter('DashboardBottomNavigation');
        }
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        if (isSplashScreen) {
          goToRouter('OnboardingScreen');
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [dispatch, goToRouter, isSplashScreen, isValidToken, name, value]);

  return {};
};
