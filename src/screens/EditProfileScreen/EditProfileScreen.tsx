import {useState} from 'react';
import React from 'react';

import {
  Text,
  Separator,
  KeyboardContainer,
  EditProfileLocationInformation,
  EditProfileBasicInformations,
  StepsEditProfileScreen,
} from '../../components';

import {HeaderDashboard} from '../../components';

import {getBottomSpaceHeight} from '../../utils';

const renderSteps = {
  0: EditProfileBasicInformations,
  1: EditProfileLocationInformation,
};

export interface IAppContextEditProfileStepp {
  step: string;
  setStep: () => string;
}

export const ContextEditProfileStep =
  React.createContext<IAppContextEditProfileStepp | null>(null);

export const EditProfileScreen = () => {
  const [step, setStep] = useState(0);

  const Steps = renderSteps[step];

  return (
    <KeyboardContainer>
      <HeaderDashboard />
      <ContextEditProfileStep.Provider value={[step, setStep]}>
        <StepsEditProfileScreen />
        <Separator height={28} />
        <Steps />
      </ContextEditProfileStep.Provider>

      <Separator height={getBottomSpaceHeight()} />
    </KeyboardContainer>
  );
};
