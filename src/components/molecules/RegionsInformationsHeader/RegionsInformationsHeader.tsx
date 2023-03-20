import {View} from 'react-native';
import {scale} from '../../../utils';
import {COLORS} from '../../../common';

import {Text, Separator} from '../..';

export const RegionsInformationsHeader = () => {
  return (
    <View
      style={{
        paddingHorizontal: scale(20),
        paddingVertical: scale(56),
        borderBottomWidth: 1,
        borderBottomColor: COLORS.light._02,
      }}>
      <View style={{width: '66%'}}>
        <Text typography="h2" colorFamily="brand_dark" colorVariant="_01">
          Nós temos compradores e vendores ativos nas 5 regiões do Brasil
        </Text>
      </View>
      <Separator height={28} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text typography="h4" colorFamily="gray" colorVariant="_01">
          Encontre
        </Text>
        <Text typography="h4" colorFamily="gray" colorVariant="_01">
          Consulte
        </Text>
        <Text typography="h4" colorFamily="gray" colorVariant="_01">
          Compre
        </Text>
        <Text typography="h4" colorFamily="gray" colorVariant="_01">
          Venda
        </Text>
      </View>
    </View>
  );
};
