import React from 'react';
import {EditProfileImage} from '../../';

import {Container, IconContainer} from './style';

import {useHookImagePickerImage} from '../../../hooks';
import {IconComponent} from '../../atoms';

export const EditProfileChangeImage = () => {
  const {url, onButtonPress} = useHookImagePickerImage();

  return (
    <Container onPress={() => onButtonPress()}>
      <IconContainer>
        <IconComponent icon="edit-icon" />
      </IconContainer>
      <EditProfileImage url={url} />
    </Container>
  );
};
