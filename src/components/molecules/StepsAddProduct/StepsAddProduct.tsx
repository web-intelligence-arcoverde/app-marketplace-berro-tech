import React from 'react';
import {Separator, Text} from '../..';

import {StepItem, Container} from './style';
import {useAppSelector} from '../../../hooks';

export const StepsAddProduct = () => {
  const {stepProduct} = useAppSelector(state => state.product);

  return (
    <Container>
      <StepItem isActive={stepProduct === 0} onPress={() => console.log(0)}>
        <Text typography="h4" colorFamily="gray" colorVariant="_04">
          Passo 1
        </Text>
        <Separator height={8} />
        <Text
          typography="h4"
          colorFamily="gray"
          colorVariant={stepProduct === 0 ? '_01' : '_03'}>
          Informações
        </Text>
      </StepItem>
      <StepItem isActive={stepProduct === 1} onPress={() => console.log(1)}>
        <Text typography="h4" colorFamily="gray" colorVariant="_04">
          Passo 2
        </Text>
        <Separator height={8} />
        <Text
          typography="h4"
          colorFamily="gray"
          colorVariant={stepProduct === 1 ? '_01' : '_03'}>
          Fotos e vídeos
        </Text>
      </StepItem>
      <StepItem isActive={stepProduct === 2} onPress={() => console.log(2)}>
        <Text typography="h4" colorFamily="gray" colorVariant="_04">
          Passo 3
        </Text>
        <Separator height={8} />
        <Text
          typography="h4"
          colorFamily="gray"
          colorVariant={stepProduct === 2 ? '_01' : '_03'}>
          Localização
        </Text>
      </StepItem>
    </Container>
  );
};
