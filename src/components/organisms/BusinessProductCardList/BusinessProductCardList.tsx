import {ProductItemCard, Separator, EmptyContainerProduct} from '../../';

import {View, ScrollView} from 'react-native';
import {useAppSelector} from '../../../hooks';
import {useNavigation} from '@react-navigation/native';

export const BusinessProductCardList = () => {
  const {produtcs, filterProdutcs, search} = useAppSelector(
    state => state.product,
  );
  const navigate = useNavigation();

  let isSearchExist = search.length >= 1;
  let isFilterProductExist = filterProdutcs.length >= 1;

  let productsSearchListNotExist = isSearchExist && isFilterProductExist;

  let producstListExist = produtcs.length >= 1;

  let product = productsSearchListNotExist
    ? filterProdutcs
    : filterProdutcs.length >= 1
    ? filterProdutcs
    : produtcs;

  const redirectToDetailsProduct = (id: number) => {
    //@ts-ignore
    navigate.navigate('DetailProductScreen', {
      id,
    });
  };

  return (
    <>
      {!producstListExist ? (
        <EmptyContainerProduct
          title={`Não temos negócios no momento`}
          description="Tente novamente mais tarde"
        />
      ) : (
        <>
          <ScrollView
            style={{
              zIndex: -1,
              elevation: -1,
            }}>
            <Separator height={28} />
            <View
              style={{
                flex: 1,
                paddingHorizontal: 20,
              }}>
              {product.map((item, index) => {
                return (
                  <View key={`${item}-${index}-item-product-card`}>
                    <ProductItemCard
                      {...item}
                      onPress={redirectToDetailsProduct}
                    />
                    <Separator height={20} />
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </>
      )}
    </>
  );
};
