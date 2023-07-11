import React from 'react';

import {ProductItemCard, FiltersProfileScreen} from '../../';

import {View, ScrollView} from 'react-native';

import {useNavigation} from '@react-navigation/core';
import {scale} from '../../../utils';

export const ProductListProfile = ({products}: any) => {
  const navigate = useNavigation();

  const redirectToDetailsProduct = (id: number) => {
    //@ts-ignore
    navigate.navigate('DetailProductScreen', {
      id,
    });
  };

  return (
    <View>
      <FiltersProfileScreen />
      <ScrollView
        style={{
          paddingHorizontal: scale(20),
          paddingVertical: scale(20),
          zIndex: -1,
          elevation: -1,
        }}>
        {products.map((item: any, index: number) => {
          return (
            <View style={{marginBottom: scale(20)}} key={`${item}-${index}`}>
              <ProductItemCard {...item} onPress={redirectToDetailsProduct} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
