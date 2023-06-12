import React from 'react';
import Video from 'react-native-video';

import {Text, IconComponent} from '../../';
import {useAppDispatch} from '../../../hooks';
import {removeFile} from '../../../store/reducer/product/actions';

import {Container, StyledImage, CapeIcon, DeleteIconContainer} from './style';

export const FileItem = ({index, document}: any) => {
  const dispatch = useAppDispatch();
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

      <DeleteIconContainer onPress={() => dispatch(removeFile(index))}>
        <IconComponent icon="delete-icon" />
      </DeleteIconContainer>
    </Container>
  );
};
