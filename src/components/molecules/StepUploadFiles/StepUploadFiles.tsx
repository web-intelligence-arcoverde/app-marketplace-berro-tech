import React from 'react';

import {usePickFileHook} from '../../../hooks/usePickFileHook';
import {EmptyFiles} from '../EmptyFiles/EmptyFiles';
import {ListFiles} from '../ListFiles/ListFiles';
import {useAppSelector} from '../../../hooks';
import {Container} from './style';

export const StepUploadFiles = () => {
  const {onButtonPress} = usePickFileHook();
  const {files} = useAppSelector(state => state.product);
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
