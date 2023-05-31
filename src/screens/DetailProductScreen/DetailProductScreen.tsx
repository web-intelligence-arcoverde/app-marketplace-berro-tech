import {useEffect} from 'react';
import {ScrollView, View} from 'react-native';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {
  getProductByIdRequest,
  topSearchProductRequest,
} from '../../store/reducer/product/actions';

import {
  CarouselImagesDetailProductScreen,
  ProductItemHeader,
  FooterDescriptionProduct,
  Text,
  HeaderDashboard,
  Button,
  Separator,
  MoreInformationProductDetail,
  ProfileUserBasicInformation,
  ProductSpecificList,
} from '../../components';
import {useFormatMoney} from '../../utils/formatMoney';

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

  useEffect(() => {
    dispatch(topSearchProductRequest('rank'));
  }, []);

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
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
          <ProfileUserBasicInformation {...product} />
        </>
      )}
      <Separator height={20} />
      <View
        style={{
          paddingHorizontal: 24,
        }}>
        <Text colorFamily="brand_dark" colorVariant="_01">
          Negócios semelhantes
        </Text>
      </View>
      <Separator height={40} />
      <ProductSpecificList />
      <Separator height={56} />
    </ScrollView>
  );
};
