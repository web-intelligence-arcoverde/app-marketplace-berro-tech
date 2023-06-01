import {useEffect} from 'react';
import {Linking, ScrollView, View} from 'react-native';
import {ICONS} from '../../assets';
import {
  HeaderDashboard,
  Text,
  Separator,
  IconComponent,
  Button,
  ProductItemCard,
} from '../../components';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {readSellerRequest} from '../../store/reducer/user/actions';
import {scale} from '../../utils';
import {LayoutContainer} from './style';

import {Image, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const {width} = Dimensions.get('screen');

export const SellerScreen = ({route}: any) => {
  const {id} = route.params;
  const {seller, loadingSeller} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const navigate = useNavigation();

  const {avatar_url, name, addresses, products} = seller;

  useEffect(() => {
    dispatch(readSellerRequest(id));
  }, []);

  console.log(products);

  const Seller = ICONS['seller-default'];

  let {city, state} =
    addresses.length >= 1 ? addresses[0] : {city: '', state: ''};

  let isExistAddress = city.length >= 1 && state.length >= 1;

  let whatsappNo = '87998093765';
  let whatsappMsg = 'BerroTech';

  const goToWhatsapp = async () =>
    await Linking.openURL(
      `whatsapp://send?phone=${whatsappNo}&text=${whatsappMsg}`,
    );

  const redirectToDetailsProduct = (id: number) => {
    //@ts-ignore
    navigate.navigate('DetailProductScreen', {
      id,
    });
  };

  return (
    <>
      <HeaderDashboard />
      <ScrollView>
        <View style={{width: width, height: scale(260)}}>
          {!!avatar_url ? (
            <Image
              source={{uri: avatar_url}}
              style={{
                width: width,
                height: scale(260),
                resizeMode: 'stretch',
              }}
            />
          ) : (
            <Seller />
          )}
        </View>
        <Separator height={12} />
        <LayoutContainer>
          <View>
            <Text typography="h4" colorFamily="gray" colorVariant="_04">
              Nome
            </Text>
            <Text colorFamily="gray" colorVariant="_01">
              {name}
            </Text>
          </View>
          {isExistAddress && (
            <>
              <Text typography="h4" colorFamily="gray" colorVariant="_04">
                Localização
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <IconComponent icon="location-icon" />
                <Separator width={8} />

                <View>
                  <Separator height={4} />
                  {isExistAddress && (
                    <Text
                      typography="h3"
                      colorFamily="sub_brand"
                      colorVariant="_02">
                      {city}, {state}
                    </Text>
                  )}
                </View>
              </View>
            </>
          )}

          <Separator height={20} />

          <Button
            title="Entrar em contato"
            onPress={() => goToWhatsapp()}
            icon="whatsapp-icon"
            variant="whatsapp"
          />
          <Separator height={20} />

          {products.map((item: any, index: number) => {
            return (
              <View key={`${item}-${index}-product-item-highlight`}>
                <ProductItemCard {...item} onPress={redirectToDetailsProduct} />
              </View>
            );
          })}
        </LayoutContainer>
      </ScrollView>
    </>
  );
};
