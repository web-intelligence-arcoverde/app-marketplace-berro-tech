import {useEffect} from 'react';
import {ScrollView, View} from 'react-native';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {getProductByIdRequest} from '../../store/reducer/product/actions';

import {
  CarouselImagesDetailProductScreen,
  ProductItemHeader,
  FooterDescriptionProduct,
  Text,
  HeaderDashboard,
  Button,
  Separator,
  MoreInformationProductDetail,
} from '../../components';
import {useFormatMoney} from '../../utils/formatMoney';
import {setWeightMask} from '../../utils/formatWeight';

export const DetailProductScreen = ({route}: any) => {
  //const { id } = route.params
  const id = 4;

  const {product, loadingProduct} = useAppSelector(state => state.product);

  let productInfo = !loadingProduct ? product?.products[0] : {};

  let {business} = productInfo;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductByIdRequest(id));
  }, []);

  return (
    <ScrollView>
      {loadingProduct ? (
        <></>
      ) : (
        <>
          <HeaderDashboard />
          <CarouselImagesDetailProductScreen />
          <ProductItemHeader {...productInfo} />
          <FooterDescriptionProduct {...productInfo} />

          <View
            style={{
              paddingHorizontal: 24,
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text typography="h4" colorFamily="gray" colorVariant="_04">
                Preço
              </Text>
              <View style={{display: 'flex', flexDirection: 'row', gap: 6}}>
                <Text typography="h3" colorFamily="gray" colorVariant="_02">
                  {useFormatMoney(business.price)}
                </Text>
                <Text
                  typography="h3"
                  colorFamily="brand_dark"
                  colorVariant="_04">
                  cada
                </Text>
              </View>
            </View>
            <View>
              <Text typography="h4" colorFamily="gray" colorVariant="_04">
                ou {business.installments} x
                {useFormatMoney(business.price / business.installments)}
              </Text>
            </View>
          </View>
          <Separator height={32} />
          <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
            <Button
              title="Entrar em contato"
              onPress={() => {}}
              icon="whatsapp-icon"
            />
          </View>
          <View style={{paddingHorizontal: 20}}>
            <Text typography="h3" colorFamily="gray" colorVariant="_02">
              Descrição
            </Text>
            <Separator height={10} />
            <Text typography="h3" colorFamily="gray" colorVariant="_04">
              {productInfo.description}
            </Text>
          </View>
          <Separator height={20} />
          <MoreInformationProductDetail {...productInfo} />
          <Separator height={20} />
          <View
            style={{
              paddingHorizontal: 20,
            }}>
            <Text>Perfil do vendedor</Text>
            <View>
              <Text typography="h4" colorFamily="gray" colorVariant="_04">
                Nome
              </Text>
              <Text typography="h3" colorFamily="gray" colorVariant="_02">
                Brenno Guedes
              </Text>
            </View>
            <View>
              <Text typography="h4" colorFamily="gray" colorVariant="_04">
                Localização
              </Text>
              <Text typography="h3" colorFamily="gray" colorVariant="_02">
                Campina grande, PB
              </Text>
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
};
