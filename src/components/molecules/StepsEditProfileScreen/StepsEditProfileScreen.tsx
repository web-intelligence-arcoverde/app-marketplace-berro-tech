import {Separator, Text} from '../../';

import {StepItem, Container} from './style';

interface IStepsEditProfileScreen {
  step?: number;
  setStep?: (step: number) => void;
}

export const StepsEditProfileScreen = ({
  step,
  setStep,
}: IStepsEditProfileScreen) => {
  return (
    <Container>
      <StepItem isActive={step === 0} onPress={() => setStep(0)}>
        <Text typography="h4" colorFamily="gray" colorVariant="_04">
          Editar
        </Text>
        <Separator height={8} />
        <Text
          typography="h4"
          colorFamily="gray"
          colorVariant={step === 0 ? '_01' : '_03'}>
          Conta
        </Text>
      </StepItem>
      <StepItem isActive={step === 1} onPress={() => setStep(1)}>
        <Text typography="h4" colorFamily="gray" colorVariant="_04">
          Editar
        </Text>
        <Separator height={8} />
        <Text
          typography="h4"
          colorFamily="gray"
          colorVariant={step === 1 ? '_01' : '_03'}>
          Localização
        </Text>
      </StepItem>
    </Container>
  );
};
