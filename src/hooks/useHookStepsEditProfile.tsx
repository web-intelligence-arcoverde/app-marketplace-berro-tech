import {useContext, useState} from 'react';

import {
  EditProfileLocationInformation,
  EditProfileBasicInformations,
  ContextEditProfileStep,
} from '../components';

const renderSteps = {
  0: EditProfileBasicInformations,
  1: EditProfileLocationInformation,
};

export const useHookStepsEditProfile = () => {
  const [step, setStep] = useState(0);

  const Steps = renderSteps[step];

  return {step, setStep, Steps};
};
