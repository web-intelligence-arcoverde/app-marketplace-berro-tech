import React from 'react';

import {
  HeaderLogoIntro,
  HeaderDescriptionIntro,
  Button,
  Input,
} from '../../components';
import {Container, ContainerStyled} from './style';

export const SignInDefault = () => {
  return (
    <Container>
      <HeaderLogoIntro />

      <HeaderDescriptionIntro
        title="Bem-vindo de volta"
        description="Preencha os campos para entrar"
      />

      <ContainerStyled>
        <Input />

        <Button title="Entrar" variant="contained" />
      </ContainerStyled>
    </Container>
  );
};
