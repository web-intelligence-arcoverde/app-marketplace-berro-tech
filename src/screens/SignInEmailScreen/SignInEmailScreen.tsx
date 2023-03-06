import React from 'react';

import {
  HeaderLogoIntro,
  HeaderDescriptionIntro,
  FormSignInEmailScreen,
  FooterButtonCreateAccountIntro,
  KeyboardContainer,
} from '../../components';

export const SignInEmailScreen = () => {
  return (
    <KeyboardContainer>
      <HeaderLogoIntro />

      <HeaderDescriptionIntro
        title="Bem-vindo de volta"
        description="Preencha os campos para entrar"
      />

      <FormSignInEmailScreen />

      <FooterButtonCreateAccountIntro />
    </KeyboardContainer>
  );
};
