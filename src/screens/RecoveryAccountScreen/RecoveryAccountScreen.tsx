import React from 'react';

import {
  HeaderLogoIntro,
  HeaderDescriptionIntro,
  StepsRecoveryAccount,
} from '../../components';

import {Container} from './style';

export const RecoveryAccountScreen = () => {
  return (
    <Container>
      <HeaderLogoIntro />

      <HeaderDescriptionIntro
        title="Esqueci minha senha"
        description="Siga os passos abaixo para recuperar"
      />

      <StepsRecoveryAccount />
    </Container>
  );
};
