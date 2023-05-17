import { Separator, IconComponent, Text } from '../..';

import { View } from 'react-native';

export const ProductItemAddress = ({ city, state }: any) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <IconComponent icon="location-icon" />
      <Separator width={10} />
      <Text typography="h4" colorFamily="sub_brand" colorVariant="_02">
        {city}, {state}
      </Text>
    </View>
  );
};
