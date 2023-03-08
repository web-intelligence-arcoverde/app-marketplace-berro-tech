import {useState} from 'react';

import {Text} from '../../';

import {Container, StepItem} from './style';

export const BreedSteps = () => {
  const [step, setStep] = useState(0);

  return (
    <Container>
      <StepItem onPress={() => setStep(0)} isActive={step === 0}>
        <Text
          typography="h4"
          colorFamily={step === 0 ? 'brand_dark' : 'gray'}
          colorVariant={'_03'}>
          Caprinos
        </Text>
      </StepItem>
      <StepItem onPress={() => setStep(1)} isActive={step === 1}>
        <Text
          typography="h4"
          colorFamily={step === 1 ? 'brand_dark' : 'gray'}
          colorVariant={'_03'}>
          Ovinos
        </Text>
      </StepItem>
    </Container>
  );
};
