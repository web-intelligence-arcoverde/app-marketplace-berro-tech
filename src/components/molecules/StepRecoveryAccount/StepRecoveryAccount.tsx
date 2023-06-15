import React from 'react';

import {useHookStepsRecoveryAccount} from '../..';

export const StepRecoveryAccount = () => {
  const {Steps} = useHookStepsRecoveryAccount();

  return <Steps />;
};
