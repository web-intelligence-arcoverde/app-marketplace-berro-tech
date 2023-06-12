import React from 'react';

import {Text, IconComponent} from '../../';
import {useAppDispatch} from '../../../hooks';
import {removeFile} from '../../../store/reducer/product/actions';

import {Container, StyledImage, CapeIcon, DeleteIconContainer} from './style';

export const FileItem = ({index, document}: any) => {
  const dispatch = useAppDispatch();

  return (
    <Container>
      <StyledImage source={{uri: document.uri}} />
      {index === 0 && (
        <CapeIcon>
          <Text typography="h5" colorFamily="gray" colorVariant="_01">
            Capa
          </Text>
        </CapeIcon>
      )}

      <DeleteIconContainer onPress={() => dispatch(removeFile(index))}>
        <IconComponent icon="delete-icon" />
      </DeleteIconContainer>
    </Container>
  );
};
