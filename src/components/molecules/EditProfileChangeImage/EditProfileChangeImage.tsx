import {EditProfileImage} from '../../';

import {Container} from './style';

import {useHookImagePickerImage} from '../../../hooks';

export const EditProfileChangeImage = () => {
  const {url, onButtonPress} = useHookImagePickerImage();

  return (
    <Container onPress={() => onButtonPress()}>
      <EditProfileImage url={url} />
    </Container>
  );
};
