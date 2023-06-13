import {ProductItemCard, Separator, EmptyContainerProduct} from '../../';

import {useAppDispatch, useAppSelector} from '../../../hooks';
import {useNavigation} from '@react-navigation/native';

import {Container, ContainerProduct} from './style';
import {Text} from '../../atoms';
import React from 'react';
import {View, RefreshControl} from 'react-native';
import {scale} from '../../../utils';
import {readProductRequest} from '../../../store/reducer/product/actions';

export const BusinessProductCardList = () => {
  const {produtcs, filterProdutcs, search, loadingProducts} = useAppSelector(
    state => state.product,
  );

  const dispatch = useAppDispatch();

  let isSearchExist = search.length >= 1;
  let isFilterProductExist = filterProdutcs.length >= 1;

  let productsSearchListExist = isSearchExist && isFilterProductExist;

  let producstListExist = produtcs.length >= 1;

  let product: any = isFilterProductExist ? filterProdutcs : produtcs;

  const renderContainerList = () => {
    if (producstListExist) {
      if (productsSearchListExist) {
        return <RenderList product={product} />;
      } else if (!isSearchExist) {
        return <RenderList product={product} />;
      } else {
        return (
          <EmptyContainerProduct
            title={`Nenhum resultado para “${search}” `}
            description="Tente alterar os filtros para encontrar negócios"
          />
        );
      }
    } else {
      return (
        <EmptyContainerProduct
          title={'Não temos negócios no momento '}
          description={'Tente novamente mais tarde'}
        />
      );
    }
  };

  return (
    <>
      {productsSearchListExist && (
        <View style={{paddingHorizontal: scale(20), marginTop: scale(28)}}>
          <Text typography="h3" colorFamily="gray" colorVariant="_03">
            {filterProdutcs.length} resultados para "{search}"
          </Text>
        </View>
      )}
      {renderContainerList()}
    </>
  );
};

const RenderList = ({product}: any) => {
  const {loadingProducts} = useAppSelector(state => state.product);
  const dispatch = useAppDispatch();
  const navigate = useNavigation();

  const onRefresh = React.useCallback(() => {
    dispatch(readProductRequest());
  }, [dispatch]);

  const redirectToDetailsProduct = (id: number) => {
    //@ts-ignore
    navigate.navigate('DetailProductScreen', {
      id,
    });
  };

  return (
    <Container
      refreshControl={
        <RefreshControl refreshing={loadingProducts} onRefresh={onRefresh} />
      }>
      <Separator height={32} />
      {product.map((item: any, index: number) => {
        return (
          <ContainerProduct key={`${item}-${index}-item-product-card`}>
            <ProductItemCard {...item} onPress={redirectToDetailsProduct} />
            <Separator height={20} />
          </ContainerProduct>
        );
      })}
    </Container>
  );
};
