import {ScrollView} from 'react-native';

import {ProductItemCard, Separator} from '../../';

import {View} from 'react-native';

export const BusinessProductCardList = () => {
  return (
    <View>
      {[1, 2, 3, 4, 5, 6].map((item, index) => {
        return (
          <View key={`${item}-${index}-item-product-card`}>
            <ProductItemCard />
            <Separator height={20} />
          </View>
        );
      })}
    </View>
  );
};
