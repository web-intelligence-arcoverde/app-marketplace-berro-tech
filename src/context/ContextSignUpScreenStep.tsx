import React, {useState} from 'react';

import {SignUpScreenStep01, SignUpScreenStep02} from '../components/';

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export interface IAppContextSignUpScreenStep {
  step: number;
  setStep: (step: number) => void;
}

export const ContextSignUpScreenStep =
  React.createContext<IAppContextSignUpScreenStep | null>(null);

export const ProviderStepsFormSignUp = ({children}: Props) => {
  const [step, setStep] = useState(0);

  return (
    <ContextSignUpScreenStep.Provider value={{step, setStep}}>
      {children}
    </ContextSignUpScreenStep.Provider>
  );
};
