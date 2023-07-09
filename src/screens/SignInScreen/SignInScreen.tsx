import React from 'react';

import {ScrollView} from 'react-native';

import {
  HeaderLogoIntro,
  HeaderDescriptionIntro,
  FormSignInEmailScreen,
  FooterButtonCreateAccountIntro,
} from '../../components';

export const SignInScreen = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderLogoIntro />
      <ScrollView>
        <HeaderDescriptionIntro
          title="Bem-vindo de volta"
          description="Preencha os campos para entrar"
        />

        <FormSignInEmailScreen />

        <FooterButtonCreateAccountIntro />
      </ScrollView>
    </ScrollView>
  );
};
