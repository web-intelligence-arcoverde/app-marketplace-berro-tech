import React from 'react';
import Video from 'react-native-video';

import {Text, IconComponent} from '../../';

import {Container, StyledImage, CapeIcon, DeleteIconContainer} from './style';
import {StyleSheet} from 'react-native';
import {scale} from '../../../utils';

interface FileItemProps {
  index: number;
  document: any;
  removeFile: any;
}

export const FileItem = ({index, document, removeFile}: FileItemProps) => {
  let typeUrl = document?.url?.split('.')?.reverse()[0];
  let typeUpload = document?.type?.split('/')[0];

  let isVideo = typeUrl === 'mp4';
  let isVideoUploaded = typeUpload === 'video';

  let url = typeUpload ? document.uri : document.url;

  let isVideoFile = isVideo || isVideoUploaded;

  return (
    <Container>
      {isVideoFile && (
        <Video
          source={{uri: url}}
          style={styles.videoContainer}
          muted
          controls
          resizeMode="stretch"
        />
      )}
      {!isVideoFile && <StyledImage source={{uri: url}} />}
      {index === 0 && (
        <CapeIcon>
          <Text typography="h5" colorFamily="gray" colorVariant="_01">
            Capa
          </Text>
        </CapeIcon>
      )}

      <DeleteIconContainer onPress={() => removeFile(index)}>
        <IconComponent icon="delete-icon" />
      </DeleteIconContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    width: '100%',
    height: scale(180),
    borderRadius: scale(6),
    marginBottom: scale(16),
  },
});
