import {getStatusBarHeight} from '../../../utils';

import {View} from 'react-native';

import {Separator, HeaderVariantProfile, HeaderVariantProfileEdit} from '../..';

import {style} from './style';

export const HeaderDashboard = () => {
  return (
    <View style={style.container}>
      <Separator height={getStatusBarHeight()} />

      <View style={style.content}>
        <HeaderVariantProfileEdit />

        <HeaderVariantProfile />
      </View>
    </View>
  );
};
