import React, {useContext} from 'react';

import {usePickFileHook} from '../../../hooks/usePickFileHook';
import {EmptyFiles} from '../EmptyFiles/EmptyFiles';
import {ListFiles} from '../ListFiles/ListFiles';
import {Container} from './style';
import {
  ContextFormAddProduct,
  IAppContextAddProduct,
} from '../../../context/ContextContainerAddProduct';

export const StepUploadFiles = () => {
  const {files} = useContext(ContextFormAddProduct) as IAppContextAddProduct;
  const {onButtonPress} = usePickFileHook();
  let filesExist = files.length >= 1;

  return (
    <Container>
      {filesExist ? (
        <ListFiles />
      ) : (
        <EmptyFiles onButtonPress={onButtonPress} />
      )}
    </Container>
  );
};
