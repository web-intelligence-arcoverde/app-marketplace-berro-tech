import React, {useContext} from 'react';
import Video from 'react-native-video';

import {Text, IconComponent} from '../../';

import {Container, StyledImage, CapeIcon, DeleteIconContainer} from './style';
import {
  ContextFormAddProduct,
  IAppContextAddProduct,
} from '../../../context/ContextContainerAddProduct';

export const FileItem = ({index, document}: any) => {
  const {removerFile} = useContext(
    ContextFormAddProduct,
  ) as IAppContextAddProduct;

  let type = document.type.split('/')[0];
  let isVideo = type === 'video';
  return (
    <Container>
      {isVideo && (
        <Video
          source={{uri: document.uri}}
          style={{
            width: '100%',
            height: 180,
            borderRadius: 6,
            marginBottom: 16,
          }}
          muted
          controls
          resizeMode="stretch"
        />
      )}
      {!isVideo && <StyledImage source={{uri: document.uri}} />}
      {index === 0 && (
        <CapeIcon>
          <Text typography="h5" colorFamily="gray" colorVariant="_01">
            Capa
          </Text>
        </CapeIcon>
      )}

      <DeleteIconContainer onPress={() => removerFile(index)}>
        <IconComponent icon="delete-icon" />
      </DeleteIconContainer>
    </Container>
  );
};
