import {ProductItemCard, Separator, EmptyContainerProduct} from '../../';

import {useAppSelector} from '../../../hooks';
import {useNavigation} from '@react-navigation/native';

import {Container, ContainerProduct} from './style';

export const BusinessProductCardList = () => {
  const {produtcs, filterProdutcs, search} = useAppSelector(
    state => state.product,
  );
  const navigate = useNavigation();

  let isSearchExist = search.length >= 1;
  let isFilterProductExist = filterProdutcs.length >= 1;

  let productsSearchListExist = isSearchExist && isFilterProductExist;

  let producstListExist = produtcs.length >= 1;

  let filterProduct = productsSearchListExist && filterProdutcs;

  let product: any = isFilterProductExist ? filterProduct : produtcs;

  const renderList = () => {
    if (producstListExist) {
      if (productsSearchListExist) {
        return (
          <Container>
            <Separator height={32} />
            {product.map((item: any, index: number) => {
              return (
                <ContainerProduct key={`${item}-${index}-item-product-card`}>
                  <ProductItemCard
                    {...item}
                    onPress={redirectToDetailsProduct}
                  />
                  <Separator height={20} />
                </ContainerProduct>
              );
            })}
          </Container>
        );
      } else if (!isSearchExist) {
        return (
          <Container>
            <Separator height={32} />
            {product.map((item: any, index: number) => {
              return (
                <ContainerProduct key={`${item}-${index}-item-product-card`}>
                  <ProductItemCard
                    {...item}
                    onPress={redirectToDetailsProduct}
                  />
                  <Separator height={20} />
                </ContainerProduct>
              );
            })}
          </Container>
        );
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

  console.log(search.length);

  const redirectToDetailsProduct = (id: number) => {
    //@ts-ignore
    navigate.navigate('DetailProductScreen', {
      id,
    });
  };

  return <>{renderList()}</>;
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
