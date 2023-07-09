import React from 'react';

import {
  HeaderLogoIntro,
  HeaderDescriptionIntro,
  AppContextSignUpScreenComponent,
} from '../../components';

import {ScrollView} from 'react-native';
import {Container} from './style';

export const SignUpScreen = () => {
  return (
    <Container>
      <HeaderLogoIntro />
      <ScrollView>
        <HeaderDescriptionIntro
          title="Seja bem-vindo"
          description="Preencha os campos"
        />

        <AppContextSignUpScreenComponent />
      </ScrollView>
    </Container>
  );
};
