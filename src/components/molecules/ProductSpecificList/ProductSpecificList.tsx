import {ScrollView, View} from 'react-native';
import {ProductItemCard} from '../../';
import {scale} from '../../../utils';

export const ProductSpecificList = () => {
  return (
    <ScrollView
      horizontal={true}
      style={{paddingHorizontal: scale(20), width: '100%'}}>
      {[1, 2, 3].map((item, index) => {
        return (
          <View
            style={{width: scale(290), marginRight: scale(12)}}
            key={`${item}-${index}`}>
            <ProductItemCard />
          </View>
        );
      })}
    </ScrollView>
  );
};
