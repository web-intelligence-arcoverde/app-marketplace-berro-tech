import React from 'react';
import {ContextSignUpScreenStep} from '../../../context/ContextSignUpScreenStep';
import {useHookStepsSignUpScreen} from '../../../hooks/useHookStepsSignUpScreen';
import {Container} from './style';

import {SignInButtonContainer} from '../..';

export const AppContextSignUpScreenComponent = () => {
  const {Steps, step, setStep} = useHookStepsSignUpScreen();

  return (
    <ContextSignUpScreenStep.Provider value={[step, setStep]}>
      <Container>
        <Steps />
      </Container>
      <SignInButtonContainer />
    </ContextSignUpScreenStep.Provider>
  );
};
