import {View} from 'react-native';

import {
  Separator,
  Button,
  ProductSpecificList,
  SelectFilterProductSpecificList,
} from '../../';

import {Container} from './style';

export const ProductListSpecificHomeScreen = () => {
  return (
    <View>
      <SelectFilterProductSpecificList />
      <Separator height={32} />
      <ProductSpecificList />
      <Separator height={32} />
      <Container>
        <Button title="Ver mais" variant="disabled" onPress={() => {}} />
      </Container>
      <Separator height={56} />
    </View>
  );
};
