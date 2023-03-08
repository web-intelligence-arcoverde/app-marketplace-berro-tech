import {ProductItemCard} from '../../';

import {ScrollView} from 'react-native';

export const ProductListProfile = () => {
  return (
    <ScrollView style={{paddingHorizontal: 20, paddingVertical: 20}}>
      <ProductItemCard />
      <ProductItemCard />
    </ScrollView>
  );
};
