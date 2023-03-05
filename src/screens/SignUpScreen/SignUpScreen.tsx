import React from 'react';

import {
  HeaderLogoIntro,
  HeaderDescriptionIntro,
  Button,
  AppContextSignUpScreenComponent,
} from '../../components';
import {Container} from './style';

export const SignUpScreen = () => {
  return (
    <Container>
      <HeaderLogoIntro />

      <HeaderDescriptionIntro
        title="Seja bem-vindo"
        description="Preencha os campos"
      />

      <AppContextSignUpScreenComponent />
    </Container>
  );
};
