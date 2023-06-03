import {useRoute} from '@react-navigation/native';
import {Image} from 'react-native';

import {HOME_SCREEN, BUSINESS_SCREEN, PROFILE_SCREEN} from '../../../common';
import {IMAGES} from '../../../assets';

export const AppLogo = () => {
  const {name} = useRoute();

  const isHomeScreen = name === HOME_SCREEN;
  const isBusinessScreen = name === BUSINESS_SCREEN;
  const isProfileScreen = name === PROFILE_SCREEN;

  const showLogoApp = isHomeScreen || isBusinessScreen || isProfileScreen;

  return <>{showLogoApp ? <Image source={IMAGES.LogoHeader} /> : <></>}</>;
};
