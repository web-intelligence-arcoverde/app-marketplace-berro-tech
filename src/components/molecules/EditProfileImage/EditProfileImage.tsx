import {useAppSelector} from '../../../hooks';
import {ImageContainer} from './style';

interface IEditProfileImage {
  url?: string;
}

export const EditProfileImage = ({url}: IEditProfileImage) => {
  const {avatar_url} = useAppSelector(state => state.auth.user);

  const imageUrl = !!url
    ? {uri: url}
    : !!avatar_url
    ? {uri: avatar_url}
    : {uri: url};

  return <ImageContainer resizeMode="stretch" source={imageUrl} />;
};
