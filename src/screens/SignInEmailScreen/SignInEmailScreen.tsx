import React from 'react';

import {
  HeaderLogoIntro,
  HeaderDescriptionIntro,
  FormSignInEmailScreen,
  FooterButtonCreateAccountIntro,
} from '../../components';
import {Container} from './style';

export const SignInEmailScreen = () => {
  return (
    <Container>
      <HeaderLogoIntro />

      <HeaderDescriptionIntro
        title="Bem-vindo de volta"
        description="Preencha os campos para entrar"
      />

      <FormSignInEmailScreen />

      <FooterButtonCreateAccountIntro />
    </Container>
  );
};
