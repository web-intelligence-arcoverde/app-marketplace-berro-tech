import React from 'react';
import {ScrollView} from 'react-native';

import {
  HeaderLogoIntro,
  HeaderDescriptionIntro,
  StepsRecoveryAccount,
  KeyboardContainer,
} from '../../components';

export const RecoveryAccountScreen = () => {
  return (
    <KeyboardContainer>
      <ScrollView>
        <HeaderLogoIntro />

        <HeaderDescriptionIntro
          title="Esqueci minha senha"
          description="Siga os passos abaixo para recuperar"
        />

        <StepsRecoveryAccount />
      </ScrollView>
    </KeyboardContainer>
  );
};
