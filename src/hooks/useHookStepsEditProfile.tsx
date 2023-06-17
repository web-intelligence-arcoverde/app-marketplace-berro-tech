import {useState} from 'react';
import {useAppSelector} from '.';

import {
  EditProfileLocationInformation,
  EditProfileBasicInformations,
} from '../components';
import {ProfileChangerPasswordScreen} from '../screens';

const renderSteps = {
  0: EditProfileBasicInformations,
  1: EditProfileLocationInformation,
  2: ProfileChangerPasswordScreen,
};

export const useHookStepsEditProfile = () => {
  const {step_edit_profile} = useAppSelector(state => state.user);

  const [step, setStep] = useState(step_edit_profile);

  const Steps = renderSteps[step];

  return {step, setStep, Steps};
};
