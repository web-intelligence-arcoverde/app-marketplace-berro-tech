import React from 'react';

import {View} from 'react-native';

import {Text, IconComponent, Separator} from '../../';

import {Container, TouchContainer} from './style';

export const EmptyFiles = ({onButtonPress}: any) => {
  return (
    <Container>
      <TouchContainer onPress={() => onButtonPress()}>
        <IconComponent icon="empty-documents" />
        <Separator height={10} />
        <Text typography="h3" colorFamily="gray" colorVariant="_01">
          Adicione fotos e videos dos animais
        </Text>
        <View style={{display: 'flex', flexDirection: 'row', gap: 4}}>
          <Text typography="h4" colorFamily="gray" colorVariant="_02">
            Selecione no
          </Text>
          <Text typography="h4" colorFamily="sub_brand" colorVariant="_02">
            seu celular
          </Text>
        </View>
      </TouchContainer>
    </Container>
  );
};
