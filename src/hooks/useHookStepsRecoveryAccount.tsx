import {useContext} from 'react';
import {AppContextStepRecoveryAccount} from '../context/ContextRecoveryAccountStep';

import {
  RecoveryAccountScreenStep01,
  RecoveryAccountScreenStep02,
} from '../components';

const stepContainer: any = {
  0: RecoveryAccountScreenStep01,
  1: RecoveryAccountScreenStep02,
};

export const useHookStepsRecoveryAccount = () => {
  const [step, setStep, email, setEmail] = useContext(
    AppContextStepRecoveryAccount,
  );

  const Steps = stepContainer[step];

  return {step, setStep, Steps, setEmail, email};
};
