import React, {useContext, useEffect} from 'react';

import {HeaderDashboard, Loading, StepsAddProduct} from '../../components';

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
  3: Loading,
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
