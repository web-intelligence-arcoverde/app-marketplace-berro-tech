import React from 'react';
import {View} from 'react-native';

import {
  HeaderLogoIntro,
  HeaderDescriptionIntro,
  Button,
  Input,
  Separator,
  Text,
  FormSignInEmailScreen,
} from '../../components';
import {Container, ContainerStyled} from './style';

import {TouchableOpacity} from 'react-native';

export const SignInEmailScreen = () => {
  return (
    <Container>
      <HeaderLogoIntro />

      <HeaderDescriptionIntro
        title="Bem-vindo de volta"
        description="Preencha os campos para entrar"
      />

      <FormSignInEmailScreen />

      <View style={{paddingHorizontal: 20}}>
        <Button title="Criar conta" variant="containedSecondary" />
      </View>
    </Container>
  );
};
