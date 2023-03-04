import {useState} from 'react';
import {
  RecoveryAccountScreenStep01,
  RecoveryAccountScreenStep02,
} from '../components';

const stepContainer: any = {
  0: RecoveryAccountScreenStep01,
  1: RecoveryAccountScreenStep02,
};

export const useHookStepsRecoveryAccount = () => {
  const [step, setStep] = useState(0);

  const ContainerSteps = stepContainer[step];

  return {ContainerSteps, setStep, step};
};
