import React, {useState} from 'react';

import {useEffect} from 'react';
import {Linking, ScrollView, View} from 'react-native';

import {useAppDispatch, useAppSelector, useNavigationHook} from '../../hooks';
import {
  deleteProductRequest,
  getProductByIdRequest,
  renewLimitProductRequest,
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
  Loading,
} from '../../components';

import {LayoutContainer} from './style';
import {CheckBox, Dialog} from '@rneui/base';
import {useToast} from 'react-native-toast-notifications';
import {useNavigation} from '@react-navigation/native';

export const DetailProductScreen = ({route}: any) => {
  const {id} = route.params;
  const navigate = useNavigation();
  const {product, loadingProduct} = useAppSelector(state => state.product);
  const {user} = useAppSelector(state => state.auth);

  let productInfo = !loadingProduct ? product?.products[0] : {};

  let productIsMine = user.id === productInfo.user_id;

  let concatInfo = !loadingProduct ? product?.contacts[0] : {phone_number: ''};

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductByIdRequest(id));
  }, []);

  useEffect(() => {
    dispatch(topSearchProductRequest('rank'));
  }, [dispatch]);

  let whatsappMsg = 'BerroTech';

  const goToWhatsapp = async () =>
    await Linking.openURL(
      `whatsapp://send?phone=${concatInfo.phone_number}&text=${whatsappMsg}`,
    );

  const [state, setState] = useState(false);
  const toast = useToast();

  const renewProduct = () => {
    let updateState = !state;
    setState(updateState);
    if (updateState) {
      dispatch(renewLimitProductRequest(productInfo.id));
      toast.show('Seu produto foi renovado', {
        type: 'success',
        placement: 'bottom',
        duration: 4000,
        animationType: 'zoom-in',
      });
    }
  };

  const redirectToDetailsProduct = (id: number) => {
    //@ts-ignore
    navigate.navigate('EditProductScreen', {
      id,
    });
  };

  const {goToRouter} = useNavigationHook();

  const deleteProduct = () => {
    dispatch(
      deleteProductRequest({router: goToRouter, toast, id: productInfo.id}),
    );
  };

  const [visible2, setVisible2] = useState(false);

  const toggleDialog2 = () => {
    setVisible2(!visible2);
  };

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      {loadingProduct ? (
        <Loading />
      ) : (
        <View>
          <HeaderDashboard />
          <CarouselImagesDetailProductScreen />
          <ProductItemHeader {...productInfo} />

          <FooterDescriptionProduct {...productInfo} />

          <PriceProductDetailScreen {...productInfo} />
          {!productIsMine && (
            <LayoutContainer>
              <Button
                title="Entrar em contato"
                onPress={() => goToWhatsapp()}
                icon="whatsapp-icon"
                variant="whatsapp"
              />
            </LayoutContainer>
          )}
          <DescriptionProductDetailScreen {...productInfo} />
          <LayoutContainer>
            <MoreInformationProductDetail {...productInfo} />
          </LayoutContainer>
          {!productIsMine && (
            <LayoutContainer>
              <ProfileUserBasicInformation {...product} />
            </LayoutContainer>
          )}
        </View>
      )}
      <Separator height={20} />
      {!productIsMine ? (
        <>
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
        </>
      ) : (
        <>
          <LayoutContainer>
            <Text typography="h3" colorFamily="gray" colorVariant="_04">
              Suas publicações ficam ativas por 1 mês, depois desse período você
              será notificado por email para renovar
            </Text>
          </LayoutContainer>
          <LayoutContainer>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text typography="h3" colorFamily="gray" colorVariant="_04">
                Ativar renovação automática
              </Text>
              <CheckBox
                checked={state}
                onPress={() => renewProduct()}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                checkedColor="#1B5DE0"
              />
            </View>
          </LayoutContainer>
          <LayoutContainer>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  width: '40%',
                }}>
                <Button
                  title="Editar"
                  onPress={() => redirectToDetailsProduct(productInfo.id)}
                  variant="outlined"
                />
              </View>
              <View
                style={{
                  width: '40%',
                }}>
                <Button
                  title="Remover"
                  onPress={() => toggleDialog2()}
                  variant="noneSecondaryBorder"
                />
              </View>
            </View>
          </LayoutContainer>
        </>
      )}

      <Dialog
        isVisible={visible2}
        onBackdropPress={toggleDialog2}
        overlayStyle={{backgroundColor: '#fff'}}>
        <Text typography="h3" colorFamily="gray" colorVariant="_04">
          Realmente deseja deletar esse produto?
        </Text>
        <Dialog.Actions>
          <Dialog.Button
            title="Confirmar"
            onPress={() => deleteProduct()}
            titleStyle={{color: 'red'}}
          />
          <Dialog.Button title="Cancelar" onPress={() => toggleDialog2()} />
        </Dialog.Actions>
      </Dialog>
    </ScrollView>
  );
};
