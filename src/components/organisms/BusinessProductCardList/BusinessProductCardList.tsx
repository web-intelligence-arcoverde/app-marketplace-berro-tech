import {ProductItemCard, Separator, EmptyContainerProduct} from '../../';

import {useAppSelector} from '../../../hooks';
import {useNavigation} from '@react-navigation/native';

import {Container, ContainerProduct} from './style';
import {Text} from '../../atoms';
import React from 'react';
import {View} from 'react-native';
import {scale} from '../../../utils';

export const BusinessProductCardList = () => {
  const {produtcs, filterProdutcs, search} = useAppSelector(
    state => state.product,
  );
  const navigate = useNavigation();

  let isSearchExist = search.length >= 1;
  let isFilterProductExist = filterProdutcs.length >= 1;

  let productsSearchListExist = isSearchExist && isFilterProductExist;

  let producstListExist = produtcs.length >= 1;

  let product: any = isFilterProductExist ? filterProdutcs : produtcs;

  const RenderList = () => {
    return (
      <Container>
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

  const renderContainerList = () => {
    if (producstListExist) {
      if (productsSearchListExist) {
        return <RenderList />;
      } else if (!isSearchExist) {
        return <RenderList />;
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
          title={`Não temos negócios no momento `}
          description={`Tente novamente mais tarde`}
        />
      );
    }
  };

  const redirectToDetailsProduct = (id: number) => {
    //@ts-ignore
    navigate.navigate('DetailProductScreen', {
      id,
    });
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

/*

 <Container>
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


*/
