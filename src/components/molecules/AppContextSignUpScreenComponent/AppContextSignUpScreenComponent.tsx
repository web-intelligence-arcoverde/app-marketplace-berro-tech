import React from 'react';

import {useHookStepsEditProfile} from '../../../hooks/useHookStepsEditProfile';

import {Separator, StepsEditProfileScreen} from '../..';

import {ContextEditProfileStep} from '../../../context';

export const AppContextEditProfileScreenComponent = () => {
  const {Steps, step, setStep} = useHookStepsEditProfile();

  return (
    <ContextEditProfileStep.Provider value={[step, setStep]}>
      <StepsEditProfileScreen />
      <Separator height={28} />
      <Steps />
    </ContextEditProfileStep.Provider>
  );
};
