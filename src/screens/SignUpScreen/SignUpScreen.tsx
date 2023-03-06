import React from 'react';

import {
  HeaderLogoIntro,
  HeaderDescriptionIntro,
  AppContextSignUpScreenComponent,
  KeyboardContainer,
} from '../../components';

export const SignUpScreen = () => {
  return (
    <KeyboardContainer>
      <HeaderLogoIntro />

      <HeaderDescriptionIntro
        title="Seja bem-vindo"
        description="Preencha os campos"
      />

      <AppContextSignUpScreenComponent />
    </KeyboardContainer>
  );
};
