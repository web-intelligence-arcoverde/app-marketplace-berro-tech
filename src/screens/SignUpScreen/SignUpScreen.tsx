import React from 'react';

import {
  HeaderLogoIntro,
  HeaderDescriptionIntro,
  AppContextSignUpScreenComponent,
  KeyboardContainer,
} from '../../components';

import {ScrollView} from 'react-native';

export const SignUpScreen = () => {
  return (
    <KeyboardContainer>
      <HeaderLogoIntro />
      <ScrollView>
        <HeaderDescriptionIntro
          title="Seja bem-vindo"
          description="Preencha os campos"
        />

        <AppContextSignUpScreenComponent />
      </ScrollView>
    </KeyboardContainer>
  );
};
