import {View} from 'react-native';

import {
  Separator,
  Button,
  ProductSpecificList,
  SelectFilterProductSpecificList,
} from '../../';
import {useAppSelector, useNavigationHook} from '../../../hooks';

import {Container} from './style';

export const ProductListSpecificHomeScreen = () => {
  const {loadingTopSearchProduct} = useAppSelector(state => state.product);

  const {goToRouter} = useNavigationHook();

  return (
    <View>
      <SelectFilterProductSpecificList />
      <Separator height={32} />
      {!loadingTopSearchProduct && <ProductSpecificList />}
      <Separator height={32} />
      <Container>
        <Button
          title="Ver mais"
          variant="disabled"
          onPress={() => goToRouter('Negócios')}
        />
      </Container>
      <Separator height={56} />
    </View>
  );
};
