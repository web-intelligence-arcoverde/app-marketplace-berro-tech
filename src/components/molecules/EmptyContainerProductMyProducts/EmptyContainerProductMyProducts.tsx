import {IconComponent, Text} from '../../';

import {ScrollView, View} from 'react-native';
import {Separator} from '../../atoms';

export const EmptyContainerProductMyProducts = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%',
      }}>
      <IconComponent icon="logo-profile" />

      <Separator height={12} />

      <Text typography="h3" colorFamily="gray" colorVariant="_01">
        Publique seus animais para venda
      </Text>

      <View style={{width: '60%'}}>
        <Text
          typography="h4"
          colorFamily="gray"
          colorVariant="_04"
          textAlign="center">
          Em apenas 3 etapas você pode começar a vender
        </Text>
      </View>
    </View>
  );
};
