import React, {useContext} from 'react';

import {Separator, Text} from '../..';

import {StepItem, Container} from './style';
import {
  ContextEditProduct,
  IAppContextEditProduct,
} from '../../../context/ContextEditProduct';

export const StepsEditProduct = () => {
  const {step, setStep} = useContext(
    ContextEditProduct,
  ) as IAppContextEditProduct;

  return (
    <Container>
      <StepItem isActive={step === 0} onPress={() => setStep(0)}>
        <Text typography="h4" colorFamily="gray" colorVariant="_04">
          Passo 1
        </Text>
        <Separator height={8} />
        <Text
          typography="h4"
          colorFamily="gray"
          colorVariant={step === 0 ? '_01' : '_03'}>
          Informações
        </Text>
      </StepItem>
      <StepItem isActive={step === 1} onPress={() => setStep(1)}>
        <Text typography="h4" colorFamily="gray" colorVariant="_04">
          Passo 2
        </Text>
        <Separator height={8} />
        <Text
          typography="h4"
          colorFamily="gray"
          colorVariant={step === 1 ? '_01' : '_03'}>
          Fotos e vídeos
        </Text>
      </StepItem>
      <StepItem isActive={step === 2} onPress={() => setStep(2)}>
        <Text typography="h4" colorFamily="gray" colorVariant="_04">
          Passo 3
        </Text>
        <Separator height={8} />
        <Text
          typography="h4"
          colorFamily="gray"
          colorVariant={step === 2 ? '_01' : '_03'}>
          Localização
        </Text>
      </StepItem>
    </Container>
  );
};
