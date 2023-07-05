import React, {useContext, useEffect} from 'react';

import {HeaderDashboard} from '../../components';

import {Container} from './style';

import {useAppDispatch} from '../../hooks';
import {getProductByIdRequest} from '../../store/reducer/product/actions';
import {StepEditBasicInformationProduct} from '../../components/molecules/StepEditBasicInformationProduct/StepEditBasicInformationProduct';
import {EditStepUploadFiles} from '../../components/molecules/EditStepUploadFiles/EditStepUploadFiles';
import {
  ContextEditProduct,
  IAppContextEditProduct,
  ProviderStepsFormEditProduct,
} from '../../context/ContextEditProduct';
import {EditLocationProduct} from '../../components/molecules/EditLocationProduct/EditLocationProduct';
import {StepsEditProduct} from '../../components/molecules/StepsEditProduct/StepsEditProduct';

const Steps = {
  0: StepEditBasicInformationProduct,
  1: EditStepUploadFiles,
  2: EditLocationProduct,
};

const StepsFormCreateProductContainer = () => {
  const {step} = useContext(ContextEditProduct) as IAppContextEditProduct;

  //@ts-ignore
  const Step = Steps[step];

  return <Step />;
};

export const EditProductScreen = ({route}: any) => {
  const {id} = route.params;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductByIdRequest(id));
  }, [id, dispatch]);

  return (
    <Container>
      <HeaderDashboard />

      <ProviderStepsFormEditProduct>
        <StepsEditProduct />

        <StepsFormCreateProductContainer />
      </ProviderStepsFormEditProduct>
    </Container>
  );
};
