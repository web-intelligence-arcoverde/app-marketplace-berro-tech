import {AppContextStepRecoveryAccount} from '../../../context/AppContextStepRecoveryAccount';
export {useHookStepsRecoveryAccount} from '../../../hooks';
import {useHookStepsRecoveryAccount} from '../../';

import {RecoveryAccountScreenStep01, RecoveryAccountScreenStep02} from '../../';

import {Container} from './style';

const stepContainer: any = {
  0: RecoveryAccountScreenStep01,
  1: RecoveryAccountScreenStep02,
};
//Criar componente para receber o ter o AppContextStepRecoveryAccount e seus filhos
export const StepsRecoveryAccount = () => {
  const {step, setStep} = useHookStepsRecoveryAccount();

  const ContainerSteps = stepContainer[step];

  return (
    <AppContextStepRecoveryAccount.Provider value={[step, setStep]}>
      <Container>
        <ContainerSteps />
      </Container>
    </AppContextStepRecoveryAccount.Provider>
  );
};
