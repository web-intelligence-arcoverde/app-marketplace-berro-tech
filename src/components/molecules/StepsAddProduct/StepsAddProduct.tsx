import React, {useContext} from 'react';

import {
  ContextFormAddProduct,
  IAppContextAddProduct,
} from '../../../context/ContextContainerAddProduct';

import {Separator, Text} from '../..';

import {StepItem, Container} from './style';

export const StepsAddProduct = () => {
  const {step} = useContext(ContextFormAddProduct) as IAppContextAddProduct;

  return (
    <Container>
      <StepItem isActive={step === 0} onPress={() => console.log(0)}>
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
      <StepItem isActive={step === 1} onPress={() => console.log(1)}>
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
      <StepItem isActive={step === 2} onPress={() => console.log(2)}>
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
