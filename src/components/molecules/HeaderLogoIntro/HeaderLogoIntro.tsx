import {IMAGES} from '../../../assets';
import {Dimensions, Image} from 'react-native';
import {useEffect} from 'react';

export const HeaderLogoIntro = () => {
  const win = Dimensions.get('window');
  const ratio = win.width / 541; //541 is actual image width

  return (
    <Image
      source={IMAGES.LogoIntro}
      style={{
        width: win.width,
        height: 200 * ratio, //362 is actual height of image
      }}
      resizeMode="contain"
    />
  );
};
