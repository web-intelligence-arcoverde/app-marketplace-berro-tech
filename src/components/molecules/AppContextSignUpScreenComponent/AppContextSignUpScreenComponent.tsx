import React from 'react';

import {Separator, StepsEditProfileScreen} from '../..';

import {ContextEditProfileStep} from '../../../context';
import {useHookStepsEditProfile} from '../../../hooks/';

export const AppContextEditProfileScreenComponent = () => {
  const {Steps, step, setStep} = useHookStepsEditProfile();

  return (
    <ContextEditProfileStep.Provider value={[step, setStep]}>
      <StepsEditProfileScreen step={step} setStep={setStep} />
      <Separator height={28} />
      <Steps />
    </ContextEditProfileStep.Provider>
  );
};
