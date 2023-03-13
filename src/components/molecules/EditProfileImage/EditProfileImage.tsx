import {useAppSelector} from '../../../hooks';
import {ImageContainer} from './style';

interface IEditProfileImage {
  url?: string;
}

export const EditProfileImage = ({url}: IEditProfileImage) => {
  const {photo} = useAppSelector(state => state.user.user);

  const imageUrl = url ? {uri: url} : photo;

  return (
    <ImageContainer
      resizeMode="stretch"
      source={imageUrl}
      style={{width: '100%', height: '100%', borderRadius: 6}}
    />
  );
};
