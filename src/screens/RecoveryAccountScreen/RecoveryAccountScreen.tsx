import React from 'react';
import {ScrollView} from 'react-native';

import {
  HeaderLogoIntro,
  HeaderDescriptionIntro,
  StepsRecoveryAccount,
} from '../../components';

export const RecoveryAccountScreen = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <HeaderLogoIntro />

        <HeaderDescriptionIntro
          title="Esqueci minha senha"
          description="Siga os passos abaixo para recuperar"
        />

        <StepsRecoveryAccount />
      </ScrollView>
    </ScrollView>
  );
};
