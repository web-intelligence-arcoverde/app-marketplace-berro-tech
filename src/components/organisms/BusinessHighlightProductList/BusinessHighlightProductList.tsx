import {ScrollView} from 'react-native';

import {ProductItemCard} from '../../';
import {useAppSelector} from '../../../hooks';
import {scale} from '../../../utils';

import {useNavigation} from '@react-navigation/core';

import {ContainerProduct} from './style';

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
    <ScrollView
      horizontal={true}
      style={{
        width: '100%',
        marginHorizontal: scale(20),
      }}>
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
