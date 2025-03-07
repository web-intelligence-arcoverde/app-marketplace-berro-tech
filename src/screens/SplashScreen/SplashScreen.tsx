import React from 'react';

import {
  Container,
  ContainerLogoImage,
  ContainerLogoWithNameImage,
} from './style';

import {IMAGES} from '../../assets';
import {Image} from 'react-native';
import {useCheckUserLoggedIn} from '../../hooks/useCheckUserLoggedIn';

const {BackgroundSplashScreen, LogoSplashScreen, LogoWithNameSplashScreen} =
  IMAGES;

export const SplashScreen = () => {
  const {} = useCheckUserLoggedIn();

  return (
    <Container>
      <Image source={BackgroundSplashScreen} />
      <ContainerLogoImage>
        <Image source={LogoSplashScreen} />
      </ContainerLogoImage>

      <ContainerLogoWithNameImage>
        <Image source={LogoWithNameSplashScreen} />
      </ContainerLogoWithNameImage>
    </Container>
  );
};
