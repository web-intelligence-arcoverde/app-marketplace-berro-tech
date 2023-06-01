import React from 'react';

import {ScrollView} from 'react-native';

import {
  HeaderLogoIntro,
  HeaderDescriptionIntro,
  FormSignInEmailScreen,
  FooterButtonCreateAccountIntro,
  KeyboardContainer,
} from '../../components';
import {useAppSelector} from '../../hooks';

export const SignInEmailScreen = () => {
  return (
    <KeyboardContainer>
      <HeaderLogoIntro />
      <ScrollView>
        <HeaderDescriptionIntro
          title="Bem-vindo de volta"
          description="Preencha os campos para entrar"
        />

        <FormSignInEmailScreen />

        <FooterButtonCreateAccountIntro />
      </ScrollView>
    </KeyboardContainer>
  );
};
