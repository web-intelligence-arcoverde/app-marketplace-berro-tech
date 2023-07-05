import React, {useContext} from 'react';

import {EmptyFiles} from '../EmptyFiles/EmptyFiles';
import {Container} from './style';
import {
  ContextFormAddProduct,
  IAppContextAddProduct,
} from '../../../context/ContextContainerAddProduct';
import {usePickFileHookAdd} from '../../../hooks/usePickFileHookAdd';
import {ListFilesAdd} from '../ListFilesAdd/ListFilesAdd';

export const StepUploadFiles = () => {
  const {files} = useContext(ContextFormAddProduct) as IAppContextAddProduct;
  const {onButtonPress} = usePickFileHookAdd();
  let filesExist = files.length >= 1;

  return (
    <Container>
      {filesExist ? (
        <ListFilesAdd onButtonPress={onButtonPress} />
      ) : (
        <EmptyFiles onButtonPress={onButtonPress} />
      )}
    </Container>
  );
};
