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
  const [email, setEmail] = useState('');

  return (
    <AppContextStepRecoveryAccount.Provider
      value={[step, setStep, email, setEmail]}>
      <Container>{children}</Container>
    </AppContextStepRecoveryAccount.Provider>
  );
};
