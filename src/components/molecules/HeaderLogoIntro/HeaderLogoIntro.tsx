import {IMAGES} from '../../../assets';
import {Image} from 'react-native';
import {scale} from '../../../utils';

export const HeaderLogoIntro = () => {
  return (
    <Image
      source={IMAGES.LogoIntro}
      style={{width: '100%'}}
      resizeMode="contain"
    />
  );
};
