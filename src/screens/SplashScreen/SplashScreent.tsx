import {
  Container,
  ContainerLogoImage,
  ContainerLogoWithNameImage,
} from './style';

import {IMAGES} from '../../assets';
import {Image} from 'react-native';
import {useRedirectRouterTimeOut} from '../../hooks';

const {BackgroundSplashScreen, LogoSplashScreen, LogoWithNameSplashScreen} =
  IMAGES;

export const SplashScreen = () => {
  useRedirectRouterTimeOut();

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
