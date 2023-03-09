import {getStatusBarHeight} from '../../../utils';

import {IMAGES} from '../../../assets';

import {View, Image} from 'react-native';

import {Separator, HeaderVariantProfile, HeaderVariantProfileEdit} from '../..';

import {style} from './style';
import {useRoute} from '@react-navigation/native';

export const HeaderDashboard = () => {
  const {name} = useRoute();

  const isEditProfileScreen = name === 'EditProfileScreen';

  return (
    <View style={style.container}>
      <Separator height={getStatusBarHeight()} />

      <View>
        <View style={style.content}>
          {!isEditProfileScreen && <Image source={IMAGES.LogoHeader} />}
          <HeaderVariantProfileEdit />
          <HeaderVariantProfile />
        </View>
      </View>
    </View>
  );
};
