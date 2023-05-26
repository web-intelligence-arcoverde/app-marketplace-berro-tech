import {ScrollView, View} from 'react-native';
import {ProductItemCard} from '../../';
import {useAppSelector} from '../../../hooks';
import {scale} from '../../../utils';

export const ProductSpecificList = () => {
  const {topSearchProduct} = useAppSelector(state => state.product);

  const redirectToDetailsProduct = (id: number) => {
    //@ts-ignore
    navigate.navigate('DetailProductScreen', {
      id,
    });
  };

  return (
    <ScrollView
      horizontal={true}
      style={{paddingHorizontal: scale(20), width: '100%'}}>
      {topSearchProduct.map((item, index) => {
        return (
          <View
            style={{width: scale(290), marginRight: scale(12)}}
            key={`${item}-${index}`}>
            <ProductItemCard {...item} onPress={redirectToDetailsProduct} />
          </View>
        );
      })}
    </ScrollView>
  );
};
