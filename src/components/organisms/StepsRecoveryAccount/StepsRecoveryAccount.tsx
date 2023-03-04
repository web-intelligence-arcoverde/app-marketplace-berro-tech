export {useHookStepsRecoveryAccount} from '../../../hooks';

import {
  StepRecoveryAccount,
  AppContextStepRecoveryAccountComponent,
} from '../../';

export const StepsRecoveryAccount = () => {
  return (
    <AppContextStepRecoveryAccountComponent>
      <StepRecoveryAccount />
    </AppContextStepRecoveryAccountComponent>
  );
};
