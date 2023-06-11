import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {ProductItemCard} from '../../';
import {useAppSelector} from '../../../hooks';
import {ContainerProduct, Container} from './style';

export const BusinessHighlightProductList = () => {
  const {businessHighlightProduct} = useAppSelector(state => state.product);

  const navigate = useNavigation();

  const redirectToDetailsProduct = (id: number) => {
    //@ts-ignore
    navigate.navigate('DetailProductScreen', {
      id,
    });
  };

  return (
    <Container horizontal={true}>
      {businessHighlightProduct.slice(0, 8).map((item, index) => {
        return (
          <ContainerProduct key={`${item}-${index}-product-item-highlight`}>
            <ProductItemCard {...item} onPress={redirectToDetailsProduct} />
          </ContainerProduct>
        );
      })}
    </Container>
  );
};
