import {useRoute} from '@react-navigation/native';

import {View} from 'react-native';
import {Button, SearchInput} from '../..';
import {useNavigationHook} from '../../../hooks';

export const HeaderVariantProfile = () => {
  const {goToRouter} = useNavigationHook();

  const product = [];

  const isExistProducts = product.length > 1;

  const {name} = useRoute();

  const isProfile = name === 'Perfil';

  const titleButtonProfileAddNewProduct = !isExistProducts
    ? 'Adicionar meu primeiro negócio'
    : 'Adicionar novo negócio';

  return (
    <View>
      {isProfile && (
        <Button
          title={titleButtonProfileAddNewProduct}
          variant="containedThirdy"
          onPress={() => goToRouter('AddProductScreen')}
        />
      )}
    </View>
  );
};
