import { ScrollView } from 'react-native';

import { ProductItemCard } from '../../';
import { useAppSelector } from '../../../hooks';
import { scale } from '../../../utils';

import { useNavigation } from '@react-navigation/core';

import { ContainerProduct } from './style';

export const BusinessHighlightProductList = () => {

  const { businessHighlightProduct } = useAppSelector(state => state.product)

  const navigate = useNavigation();

  const redirectToDetailsProduct = (id: number) => {
    console.log(id)
    navigate.navigate('DetailProductScreen', {
      id
    })
  }


  return (
    <ScrollView
      horizontal={true}
      style={{ paddingHorizontal: scale(20), width: '100%' }}>
      {businessHighlightProduct.map((item, index) => {
        return (
          <ContainerProduct key={`${item}-${index}-product-item-highlight`}>
            <ProductItemCard {...item} onPress={redirectToDetailsProduct} />
          </ContainerProduct>
        );
      })}
    </ScrollView>
  );
};
