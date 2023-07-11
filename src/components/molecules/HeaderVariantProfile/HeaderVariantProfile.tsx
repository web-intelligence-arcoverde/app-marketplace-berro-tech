import {useRoute} from '@react-navigation/native';

import {View} from 'react-native';
import React from 'react';

import {Button} from '../..';
import {useAppSelector, useNavigationHook} from '../../../hooks';

export const HeaderVariantProfile = () => {
  const {goToRouter} = useNavigationHook();

  const {products} = useAppSelector(state => state.auth.user);

  const isExistProducts = products.length >= 1;

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
          variant="containedNotIcon"
          onPress={() => goToRouter('AddProductScreen')}
        />
      )}
    </View>
  );
};
