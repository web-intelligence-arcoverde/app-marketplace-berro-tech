import {ProductItemCard, FiltersProfileScreen} from '../../';

import {View, ScrollView} from 'react-native';

export const ProductListProfile = () => {
  return (
    <View>
      <FiltersProfileScreen />
      <ScrollView style={{paddingHorizontal: 20, paddingVertical: 20}}>
        <ProductItemCard />
        <ProductItemCard />
      </ScrollView>
    </View>
  );
};
