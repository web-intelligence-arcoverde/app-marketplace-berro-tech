import {useEffect} from 'react';
import {useAppDispatch, useAsyncStorage, useNavigationHook} from '.';
import {setToken} from '../store/reducer/auth/actions';
import {useRoute} from '@react-navigation/native';

export const useCheckUserLoggedIn = () => {
  const {getData, value, validToken} = useAsyncStorage();

  const {goToRouter} = useNavigationHook();

  const {name} = useRoute();

  const isSplashScreen = name === 'SplashScreen';

  const dispatch = useAppDispatch();

  console.log(value);
  console.log(validToken);

  useEffect(() => {
    getData('@token');
  }, [getData]);

  useEffect(() => {
    if (value && validToken) {
      dispatch(setToken(value));
      const timer = setTimeout(() => {
        goToRouter('DashboardBottomNavigation');
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
  }, [value, dispatch, goToRouter, validToken, isSplashScreen]);

  return {};
};
