import React, {useContext, useState} from 'react';
import {View} from 'react-native';

import {
  HeaderLogoIntro,
  HeaderDescriptionIntro,
  Button,
  SignUpScreenStep01,
  SignUpScreenStep02,
} from '../../components';
import {Container, ContainerStyled} from './style';

const stepsContainer: any = {
  0: SignUpScreenStep01,
  1: SignUpScreenStep02,
};

export interface AppContextInterface {
  step: string;
  setStep: () => string;
}

export const StepContext = React.createContext<AppContextInterface | null>(
  null,
);

export const SignUpScreen = () => {
  const [step, setStep] = useState(0);

  const ContainerSteps = stepsContainer[step];

  return (
    <Container>
      <HeaderLogoIntro />

      <HeaderDescriptionIntro
        title="Seja bem-vindo"
        description="Preencha os campos"
      />

      <ContainerStyled>
        <StepContext.Provider value={[step, setStep]}>
          <ContainerSteps />
        </StepContext.Provider>
      </ContainerStyled>
      {step === 0 && (
        <View style={{paddingHorizontal: 20}}>
          <Button
            title="Já tenho uma conta"
            variant="containedSecondary"
            onPress={() => console.log('Event')}
          />
        </View>
      )}
    </Container>
  );
};
