import {AppContextStepRecoveryAccount} from '../../../context/AppContextStepRecoveryAccount';
export {useHookStepsRecoveryAccount} from '../../../hooks';
import {useHookStepsRecoveryAccount} from '../../';

import {Container} from './style';

export const StepsRecoveryAccount = () => {
  const {step, setStep, ContainerSteps} = useHookStepsRecoveryAccount();

  return (
    <AppContextStepRecoveryAccount.Provider value={[step, setStep]}>
      <Container>
        <ContainerSteps />
      </Container>
    </AppContextStepRecoveryAccount.Provider>
  );
};
