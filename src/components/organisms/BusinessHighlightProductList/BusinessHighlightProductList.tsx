import { ScrollView } from 'react-native';

import { ProductItemCard } from '../../';
import { useAppSelector } from '../../../hooks';
import { scale } from '../../../utils';

import { ContainerProduct } from './style';

export const BusinessHighlightProductList = () => {

  const { businessHighlightProduct } = useAppSelector(state => state.product)

  return (
    <ScrollView
      horizontal={true}
      style={{ paddingHorizontal: scale(20), width: '100%' }}>
      {businessHighlightProduct.map((item, index) => {
        return (
          <ContainerProduct key={`${item}-${index}-product-item-highlight`}>
            <ProductItemCard {...item} />
          </ContainerProduct>
        );
      })}
    </ScrollView>
  );
};
