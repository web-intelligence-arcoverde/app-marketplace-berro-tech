import EStyleSheet from 'react-native-extended-stylesheet';
import {getStatusBarHeight, scale} from '../../../utils';

import {COLORS} from '../../../common';
import {IMAGES} from '../../../assets';

import {View, Image} from 'react-native';

import {Separator} from '../..';

const style = EStyleSheet.create({
  container: {
    backgroundColor: COLORS.brand_light._01,
  },

  content: {
    flexDirection: 'row',
    height: scale(96),
    paddingHorizontal: scale(20),
    paddingTop: scale(32),
  },
});

export const HeaderDashboard = () => {
  return (
    <View style={style.container}>
      <Separator height={getStatusBarHeight()} />

      <View>
        <View style={style.content}>
          <Image source={IMAGES.LogoHeader} />
        </View>
      </View>
    </View>
  );
};
