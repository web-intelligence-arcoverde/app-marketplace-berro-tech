import {getStatusBarHeight} from '../../../utils';

import {IMAGES} from '../../../assets';

import {View, Image} from 'react-native';

import {Separator, HeaderVariantProfile} from '../..';

import {style} from './style';

export const HeaderDashboard = () => {
  return (
    <View style={style.container}>
      <Separator height={getStatusBarHeight()} />

      <View>
        <View style={style.content}>
          <Image source={IMAGES.LogoHeader} />

          <HeaderVariantProfile />
        </View>
      </View>
    </View>
  );
};
