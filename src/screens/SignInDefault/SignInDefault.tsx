import React from 'react';
import {View} from 'react-native';

import {
  HeaderLogoIntro,
  HeaderDescriptionIntro,
  Button,
  Input,
  Separator,
  Text,
} from '../../components';
import {Container, ContainerStyled} from './style';

import {TouchableOpacity} from 'react-native';

export const SignInDefault = () => {
  return (
    <Container>
      <HeaderLogoIntro />

      <HeaderDescriptionIntro
        title="Bem-vindo de volta"
        description="Preencha os campos para entrar"
      />

      <ContainerStyled>
        <Input label="Email" placeholder="Seu melhor email" />
        <Separator height={20} />
        <Input label="Senha" placeholder="No mínimo 8 dígitos" password />
        <Separator height={12} />
        <TouchableOpacity
          style={{
            alignItems: 'flex-end',
          }}>
          <Text typography="h5" colorFamily="sub_brand" colorVariant="_02">
            Recuperar conta
          </Text>
        </TouchableOpacity>
        <Separator height={20} />
        <Button title="Entrar" variant="contained" />
        <Separator height={20} />
      </ContainerStyled>
      <View style={{paddingHorizontal: 20}}>
        <Button title="Criar conta" variant="containedSecondary" />
      </View>
    </Container>
  );
};
