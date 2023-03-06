import React from 'react';

import {
  HeaderLogoIntro,
  HeaderDescriptionIntro,
  StepsRecoveryAccount,
  KeyboardContainer,
} from '../../components';

export const RecoveryAccountScreen = () => {
  return (
    <KeyboardContainer>
      <HeaderLogoIntro />

      <HeaderDescriptionIntro
        title="Esqueci minha senha"
        description="Siga os passos abaixo para recuperar"
      />

      <StepsRecoveryAccount />
    </KeyboardContainer>
  );
};
