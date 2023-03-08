import {IconComponent, Text} from '../../';

import {View} from 'react-native';

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
      <Text typography="h3" colorFamily="gray" colorVariant="_01">
        Publique seus animais para venda
      </Text>

      <Text
        typography="h3"
        colorFamily="gray"
        colorVariant="_04"
        textAlign="center">
        Em apenas 3 etapas você pode começar a vender
      </Text>
    </View>
  );
};
