import React, {useContext} from 'react';

import {HeaderDashboard, StepsAddProduct} from '../../components';

import {StepBasicInformationProduct} from '../../components/molecules/StepBasicInformationProduct/StepBasicInformationProduct';
import {StepUploadFiles} from '../../components/molecules/StepUploadFiles/StepUploadFiles';
import {StepLocationProduct} from '../../components/molecules/StepLocationProduct/StepLocationProduct';
import {Container} from './style';
import {
  ContextFormAddProduct,
  IAppContextAddProduct,
  ProviderStepsFormAddProduct,
} from '../../context/ContextContainerAddProduct';

const Steps = {
  0: StepBasicInformationProduct,
  1: StepUploadFiles,
  2: StepLocationProduct,
};

export const StepsFormCreateProductContainer = () => {
  const {step} = useContext(ContextFormAddProduct) as IAppContextAddProduct;

  //@ts-ignore
  const Step = Steps[step];

  return <Step />;
};

export const AddProductScreen = () => {
  return (
    <Container>
      <HeaderDashboard />

      <ProviderStepsFormAddProduct>
        <StepsAddProduct />

        <StepsFormCreateProductContainer />
      </ProviderStepsFormAddProduct>
    </Container>
  );
};
