import {ScrollView} from 'react-native';

import {ProductItemCard} from '../../';
import {scale} from '../../../utils';

import {ContainerProduct} from './style';

export const BusinessHighlightProductList = () => {
  return (
    <ScrollView
      horizontal={true}
      style={{paddingHorizontal: scale(20), width: '100%'}}>
      {[1, 2, 3, 4].map((item, index) => {
        return (
          <ContainerProduct key={`${item}-${index}-product-item-highlight`}>
            <ProductItemCard />
          </ContainerProduct>
        );
      })}
    </ScrollView>
  );
};
