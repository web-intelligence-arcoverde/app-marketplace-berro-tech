import {ScrollView, View} from 'react-native';
import {ProductItemCard} from '../../';
import {scale} from '../../../utils';

export const ProductSpecificList = () => {
  return (
    <ScrollView
      horizontal={true}
      style={{paddingHorizontal: scale(20), width: '100%'}}>
      {[1, 2, 3].map(() => {
        return (
          <View style={{width: scale(290), marginRight: scale(12)}}>
            <ProductItemCard />
          </View>
        );
      })}
    </ScrollView>
  );
};
