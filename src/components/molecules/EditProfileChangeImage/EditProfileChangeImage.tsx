import {useState, useCallback} from 'react';
import {Image, TouchableOpacity} from 'react-native';

import * as ImagePicker from 'react-native-image-picker';
import {useAppSelector} from '../../../hooks';

import {scale} from '../../../utils';

export const EditProfileChangeImage = () => {
  const {photo} = useAppSelector(state => state.user.user);

  const [response, setResponse] = useState<any>(null);

  const onButtonPress = useCallback(() => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        includeExtra: true,
      },
      response => {
        console.log('Response = ', response);

        if (response.didCancel) {
        } else if (response?.error) {
          console.log('ImagePicker Error: ', response?.error);
        } else {
          setResponse(response.assets[0].uri);
        }
      },
    );
  }, []);

  function renderFileData() {
    if (response) {
      return (
        <Image
          resizeMode="stretch"
          source={{
            uri: response,
          }}
          style={{width: '100%', height: '100%', borderRadius: 6}}
        />
      );
    } else {
      return (
        <Image
          resizeMode="stretch"
          source={photo}
          style={{width: '100%', height: '100%', borderRadius: 6}}
        />
      );
    }
  }

  return (
    <TouchableOpacity
      style={{
        width: 'auto',
        height: scale(266),
      }}
      onPress={() => onButtonPress()}>
      <RenderImage response={response} />
    </TouchableOpacity>
  );
};

function RenderImage({response}) {
  const {photo} = useAppSelector(state => state.user.user);

  if (response) {
    return (
      <Image
        resizeMode="stretch"
        source={{
          uri: response,
        }}
        style={{width: '100%', height: '100%', borderRadius: 6}}
      />
    );
  } else {
    return (
      <Image
        resizeMode="stretch"
        source={photo}
        style={{width: '100%', height: '100%', borderRadius: 6}}
      />
    );
  }
}
