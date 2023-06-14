import React, {useContext} from 'react';
import {
  ContextSignUpScreenStep,
  IAppContextSignUpScreenStep,
} from '../../../context/ContextSignUpScreenStep';

import {SignUpScreenStep01} from '../../molecules/SignUpScreenStep01/SignUpScreenStep01';
import {SignUpScreenStep02} from '../../molecules/SignUpScreenStep02/SignUpScreenStep02';

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
