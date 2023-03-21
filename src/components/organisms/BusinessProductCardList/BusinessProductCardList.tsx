import {ScrollView} from 'react-native';

import {ProductItemCard} from '../../';

export const BusinessProductCardList = () => {
  return (
    <ScrollView>
      {[1, 2, 3, 4, 5, 6].map((item, index) => {
        return <ProductItemCard key={`${item}-${index}-item-product-card`} />;
      })}
    </ScrollView>
  );
};
