import {useCallback, useState} from 'react';

import * as ImagePicker from 'react-native-image-picker';
export const useHookImagePickerImage = () => {
  const [url, setUrl] = useState<any>(null);

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
          setUrl(response.assets[0].uri);
        }
      },
    );
  }, []);

  return {url, onButtonPress};
};
