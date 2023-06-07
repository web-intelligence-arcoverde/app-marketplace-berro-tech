import {useCallback, useState} from 'react';

import * as ImagePicker from 'react-native-image-picker';
import {useAppDispatch} from './useReduxHook';
import {setImageUserBasicInformation} from '../store/reducer/user/actions';
import {Platform} from 'react-native';
export const useHookImagePickerImage = () => {
  const [url, setUrl] = useState<any>(null);

  const dispatch = useAppDispatch();

  const onButtonPress = useCallback(() => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        includeExtra: true,
      },
      response => {
        if (response.assets) {
          let image = response.assets[0];

          let uri =
            Platform.OS === 'ios'
              ? image.uri.replace('file://', '')
              : image.uri;
          let type = image.type;
          let name = image.fileName;

          const source = {uri, type, name};

          dispatch(setImageUserBasicInformation(source));
        }

        if (response.didCancel) {
        } else if (response?.error) {
          console.log('ImagePicker Error: ', response?.error);
        } else {
          setUrl(response.assets[0].uri);
        }
      },
    );
  }, []);

  return {url, onButtonPress};
};
