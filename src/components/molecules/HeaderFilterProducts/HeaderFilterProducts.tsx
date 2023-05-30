import {View} from 'react-native';

import {Text} from '../..';

export const HeaderFilterProducts = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Text typography="h6" colorFamily="gray" colorVariant="_02">
        Filtros
      </Text>
    </View>
  );
};
