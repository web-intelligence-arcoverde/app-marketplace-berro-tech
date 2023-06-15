import {
  RecoveryAccountScreenStep01,
  RecoveryAccountScreenStep02,
} from '../components';
import {useAppSelector} from './useReduxHook';
import {RecoveryAccountScreenStep03} from '../components/molecules/RecoveryAccountScreenStep03/RecoveryAccountScreenStep03';

const stepContainer: any = {
  0: RecoveryAccountScreenStep01,
  1: RecoveryAccountScreenStep02,
  2: RecoveryAccountScreenStep03,
};

export const useHookStepsRecoveryAccount = () => {
  const {stepRecoveryAccount, recoveryAccountEmail} = useAppSelector(
    state => state.auth,
  );

  const Steps = stepContainer[stepRecoveryAccount];

  return {
    step: stepRecoveryAccount,
    Steps,
    email: recoveryAccountEmail,
  };
};
