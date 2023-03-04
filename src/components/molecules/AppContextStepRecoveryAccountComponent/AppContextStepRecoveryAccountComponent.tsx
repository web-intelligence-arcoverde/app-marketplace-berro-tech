import React, {useState} from 'react';

import {Container} from './style';

import {AppContextStepRecoveryAccount} from '../../../context';

interface IAppContextStepRecoveryAccountComponent {
  children: any;
}

export const AppContextStepRecoveryAccountComponent = ({
  children,
}: IAppContextStepRecoveryAccountComponent) => {
  const [step, setStep] = useState(0);
  return (
    <AppContextStepRecoveryAccount.Provider value={[step, setStep]}>
      <Container>{children}</Container>
    </AppContextStepRecoveryAccount.Provider>
  );
};
