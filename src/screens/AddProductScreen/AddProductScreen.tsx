import React, {useState} from 'react';

import {HeaderDashboard, StepsAddProduct} from '../../components';

import {StepBasicInformationProduct} from '../../components/molecules/StepBasicInformationProduct/StepBasicInformationProduct';
import {StepUploadFiles} from '../../components/molecules/StepUploadFiles/StepUploadFiles';
import {StepLocationProduct} from '../../components/molecules/StepLocationProduct/StepLocationProduct';
import {Container} from './style';
import {useAppSelector} from '../../hooks';

const Steps = {
  0: StepBasicInformationProduct,
  1: StepUploadFiles,
  2: StepLocationProduct,
};

export const AddProductScreen = () => {
  const [step, setStep] = useState(0);

  const {stepProduct} = useAppSelector(state => state.product);

  //@ts-ignore
  const Step = Steps[stepProduct];

  return (
    <Container>
      <HeaderDashboard />
      <StepsAddProduct step={step} setStep={setStep} />

      <Step />
    </Container>
  );
};
