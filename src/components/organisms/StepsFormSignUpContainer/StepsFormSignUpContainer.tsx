import React, {useContext} from 'react';
import {
  ContextSignUpScreenStep,
  IAppContextSignUpScreenStep,
} from '../../../context/ContextSignUpScreenStep';

import {SignUpScreenStep01, SignUpScreenStep02} from '../..';

import {Container} from './style';

const stepsContainer: any = {
  0: SignUpScreenStep01,
  1: SignUpScreenStep02,
};

export const StepsFormSignUpContainer = () => {
  const {step} = useContext(
    ContextSignUpScreenStep,
  ) as IAppContextSignUpScreenStep;

  const Steps = stepsContainer[step];

  return (
    <Container>
      <Steps />
    </Container>
  );
};
