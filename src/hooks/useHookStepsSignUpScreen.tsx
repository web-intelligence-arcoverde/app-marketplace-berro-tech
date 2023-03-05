import {useState} from 'react';

import {SignUpScreenStep01, SignUpScreenStep02} from '../components';

const stepsContainer: any = {
  0: SignUpScreenStep01,
  1: SignUpScreenStep02,
};

export const useHookStepsSignUpScreen = () => {
  const [step, setStep] = useState(0);

  const Steps = stepsContainer[step];

  return {step, setStep, Steps};
};
