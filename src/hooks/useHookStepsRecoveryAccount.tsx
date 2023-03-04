import {useContext, useState} from 'react';
import {AppContextStepRecoveryAccount} from '../context/AppContextStepRecoveryAccount';

export const useHookStepsRecoveryAccount = () => {
  const [step, setStep] = useContext(AppContextStepRecoveryAccount);

  return {step, setStep};
};
