import {View} from 'react-native';

import {
  Separator,
  Button,
  ProductSpecificList,
  SelectFilterProductSpecificList,
} from '../../';

export const ProductListSpecificHomeScreen = () => {
  return (
    <View>
      <SelectFilterProductSpecificList />
      <Separator height={32} />
      <ProductSpecificList />
      <Separator height={32} />
      <Button title="Ver mais" onPress={() => {}} />
      <Separator height={56} />
    </View>
  );
};
