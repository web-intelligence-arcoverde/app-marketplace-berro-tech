import React, {useContext, useState} from 'react';
import {View} from 'react-native';

import {
  HeaderLogoIntro,
  HeaderDescriptionIntro,
  RecoveryAccountScreenStep01,
  RecoveryAccountScreenStep02,
  Button,
} from '../../components';
import {Container, ContainerStyled} from './style';

const stepsContainer: any = {
  0: RecoveryAccountScreenStep01,
  1: RecoveryAccountScreenStep02,
};

interface AppContextInterface {
  step: string;
  setStep: () => string;
}

export const StepContextRecovery =
  React.createContext<AppContextInterface | null>(null);

export const RecoveryAccountScreen = () => {
  const [step, setStep] = useState(0);

  const ContainerSteps = stepsContainer[step];

  return (
    <Container>
      <HeaderLogoIntro />

      <HeaderDescriptionIntro
        title="Esqueci minha senha"
        description="Siga os passos abaixo para recuperar"
      />

      <ContainerStyled>
        <StepContextRecovery.Provider value={[step, setStep]}>
          <ContainerSteps />
        </StepContextRecovery.Provider>
      </ContainerStyled>
    </Container>
  );
};
