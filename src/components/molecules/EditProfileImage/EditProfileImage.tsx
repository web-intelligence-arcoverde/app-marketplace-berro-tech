import React from 'react';
import {useAppSelector} from '../../../hooks';
import {ImageContainer} from './style';
import {ICONS} from '../../../assets';

const DefaultPhotoAvatar = ICONS['avatart-icon'];

interface IEditProfileImage {
  url?: string;
}

export const EditProfileImage = ({url}: IEditProfileImage) => {
  const {avatar_url} = useAppSelector(state => state.auth.user);

  let avatarUrl = avatar_url == null ? null : {uri: avatar_url};
  let uploadedImage = url === null ? null : {uri: url};

  let isNotExistImage = uploadedImage === null && avatarUrl === null;

  const imageUrl = url
    ? {uri: url}
    : avatar_url
    ? {uri: avatar_url}
    : {uri: url};

  return (
    <>
      {isNotExistImage ? (
        <DefaultPhotoAvatar style={{width: 196, height: 196}} />
      ) : (
        <ImageContainer resizeMode="stretch" source={imageUrl} />
      )}
    </>
  );
};
