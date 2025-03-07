import {
  Container,
  ContainerLogoImage,
  ContainerLogoWithNameImage,
} from './style';

import {IMAGES} from '../../assets';
import {Image} from 'react-native';

const {BackgroundSplashScreen, LogoSplashScreen, LogoWithNameSplashScreen} =
  IMAGES;

export const LoadingScreen = () => {
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
