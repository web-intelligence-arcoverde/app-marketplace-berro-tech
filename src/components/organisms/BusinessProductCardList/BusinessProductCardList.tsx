import {ProductItemCard, Separator} from '../../';

import {View} from 'react-native';
import {useAppSelector} from '../../../hooks';
import {useNavigation} from '@react-navigation/native';

export const BusinessProductCardList = () => {
  const {produtcs} = useAppSelector(state => state.product);
  const navigate = useNavigation();

  const redirectToDetailsProduct = (id: number) => {
    //@ts-ignore
    navigate.navigate('DetailProductScreen', {
      id,
    });
  };

  return (
    <View>
      {produtcs.map((item, index) => {
        return (
          <View key={`${item}-${index}-item-product-card`}>
            <ProductItemCard {...item} onPress={redirectToDetailsProduct} />
            <Separator height={20} />
          </View>
        );
      })}
    </View>
  );
};
