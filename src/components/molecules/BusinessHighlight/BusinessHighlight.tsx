import {View, ScrollView} from 'react-native';

import Swiper from 'react-native-swiper';

import {Text, ProductItemCard, Separator} from '../../';
import {COLORS} from '../../../common';
import {scale} from '../../../utils';

export const BusinessHighlight = () => {
  return (
    <View
      style={{
        marginTop: scale(32),
        paddingBottom: scale(56),
        backgroundColor: COLORS.light_05,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.light._02,
      }}>
      <Text typography="h2" colorFamily="brand_dark" colorVariant="_01">
        Negócios em destaque
      </Text>
      <Separator height={20} />

      <ScrollView
        horizontal={true}
        style={{paddingHorizontal: scale(20), width: '100%'}}>
        <View style={{width: scale(290), marginRight: scale(12)}}>
          <ProductItemCard />
        </View>
        <View style={{width: scale(290), marginRight: scale(12)}}>
          <ProductItemCard />
        </View>
      </ScrollView>
    </View>
  );
};
