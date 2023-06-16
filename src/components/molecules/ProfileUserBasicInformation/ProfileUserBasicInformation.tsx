import React from 'react';
import {Image, View} from 'react-native';
import {Text} from '../../';
import {capitalize, scale} from '../../../utils';

import {Separator, Button} from '../../';
import {ICONS} from '../../../assets';
import {useNavigation} from '@react-navigation/core';

interface IProfileUserBasicInformation {
  id?: number;
  name?: string;
  addresses?: any;
  avatar_url?: any;
}

export const ProfileUserBasicInformation = ({
  id,
  name,
  addresses,
  avatar_url,
}: IProfileUserBasicInformation) => {
  let {city, state} =
    addresses.length >= 1 ? addresses[0] : {city: '', state: ''};

  let isExistAddress = city.length >= 1 && state.length >= 1;

  const Seller = ICONS['seller-default'];

  const navigate = useNavigation();

  const redirectToDetailsProduct = (id: any) => {
    //@ts-ignore
    navigate.navigate('SellerScreen', {
      id,
    });
  };

  return (
    <View>
      <View>
        <Text colorFamily="gray" colorVariant="_02">
          Perfil do vendedor
        </Text>
      </View>
      <Separator height={8} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <View>
            <Text typography="h4" colorFamily="gray" colorVariant="_04">
              Nome
            </Text>
            <Separator height={4} />
            <Text typography="h3" colorFamily="gray" colorVariant="_02">
              {capitalize(name)}
            </Text>
          </View>
          <Separator height={12} />
          <View>
            <Text typography="h4" colorFamily="gray" colorVariant="_04">
              Localização
            </Text>
            <Separator height={4} />
            {isExistAddress && (
              <View
                style={{
                  width: scale(200),
                }}>
                <Text typography="h3" colorFamily="gray" colorVariant="_02">
                  {city}, {state}
                </Text>
              </View>
            )}
          </View>
        </View>
        <View style={{width: scale(150), height: scale(140)}}>
          {avatar_url ? (
            <Image
              source={{uri: avatar_url}}
              style={{
                width: scale(150),
                height: scale(140),
                borderRadius: scale(6),
              }}
            />
          ) : (
            <Seller />
          )}
        </View>
      </View>
      <Separator height={20} />
      <Button
        variant="none"
        title="Ver mais"
        onPress={() => redirectToDetailsProduct(id)}
      />
    </View>
  );
};
