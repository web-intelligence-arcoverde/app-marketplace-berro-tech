import {useEffect} from 'react';
import {Linking, ScrollView, View} from 'react-native';

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
  PriceProductDetailScreen,
  DescriptionProductDetailScreen,
} from '../../components';

import {LayoutContainer} from './style';

export const DetailProductScreen = ({route}: any) => {
  const {id} = route.params;

  const {product, loadingProduct} = useAppSelector(state => state.product);

  let productInfo = !loadingProduct ? product?.products[0] : {};

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductByIdRequest(id));
  }, []);

  useEffect(() => {
    dispatch(topSearchProductRequest('rank'));
  }, []);

  let whatsappNo = '87998093765';
  let whatsappMsg = 'BerroTech';

  const goToWhatsapp = async () =>
    await Linking.openURL(
      `whatsapp://send?phone=${whatsappNo}&text=${whatsappMsg}`,
    );

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

          <PriceProductDetailScreen {...productInfo} />
          <LayoutContainer>
            <Button
              title="Entrar em contato"
              onPress={() => goToWhatsapp()}
              icon="whatsapp-icon"
              variant="whatsapp"
            />
          </LayoutContainer>
          <DescriptionProductDetailScreen {...productInfo} />
          <LayoutContainer>
            <MoreInformationProductDetail {...productInfo} />
          </LayoutContainer>
          <LayoutContainer>
            <ProfileUserBasicInformation {...product} />
          </LayoutContainer>
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
