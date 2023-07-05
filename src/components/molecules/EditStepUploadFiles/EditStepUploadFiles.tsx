import React, {useContext} from 'react';

import {usePickFileHook} from '../../../hooks/usePickFileHook';
import {EmptyFiles} from '../EmptyFiles/EmptyFiles';
import {Container} from './style';

import {
  ContextEditProduct,
  IAppContextEditProduct,
} from '../../../context/ContextEditProduct';
import {EditProdutListFiles} from '../EditProdutListFiles/EditProdutListFiles';

export const EditStepUploadFiles = () => {
  const {files, setStep, removerFile} = useContext(
    ContextEditProduct,
  ) as IAppContextEditProduct;
  const {onButtonPress} = usePickFileHook();

  let filesExist = files.length >= 1;

  return (
    <Container>
      {filesExist ? (
        <EditProdutListFiles
          files={files}
          onButtonPress={onButtonPress}
          setStep={setStep}
          removerFile={removerFile}
        />
      ) : (
        <EmptyFiles onButtonPress={onButtonPress} />
      )}
    </Container>
  );
};
