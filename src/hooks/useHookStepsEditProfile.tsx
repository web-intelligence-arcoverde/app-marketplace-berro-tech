import {useState} from 'react';
import {useAppSelector} from '.';

import {
  EditProfileLocationInformation,
  EditProfileBasicInformations,
} from '../components';

const renderSteps = {
  0: EditProfileBasicInformations,
  1: EditProfileLocationInformation,
};

export const useHookStepsEditProfile = () => {
  const {step_edit_profile} = useAppSelector(state => state.user);

  const [step, setStep] = useState(step_edit_profile);

  const Steps = renderSteps[step];

  return {step, setStep, Steps};
};
