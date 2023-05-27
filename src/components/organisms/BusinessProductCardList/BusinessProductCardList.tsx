import {ProductItemCard, Separator} from '../../';

import {View} from 'react-native';
import {useAppSelector} from '../../../hooks';
import {useNavigation} from '@react-navigation/native';

export const BusinessProductCardList = () => {
  const {produtcs, filterProdutcs} = useAppSelector(state => state.product);
  const navigate = useNavigation();

  let product = filterProdutcs.length >= 1 ? filterProdutcs : produtcs;

  const redirectToDetailsProduct = (id: number) => {
    //@ts-ignore
    navigate.navigate('DetailProductScreen', {
      id,
    });
  };

  return (
    <View>
      {product.map((item, index) => {
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
