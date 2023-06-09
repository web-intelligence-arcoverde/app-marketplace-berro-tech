import {useCallback} from 'react';
import {Platform} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {useAppDispatch} from './useReduxHook';
import {addFile} from '../store/reducer/product/actions';

interface IImage {
  uri: string;
  type: string;
  fileName: string;
}

interface IResponse {
  assets: IImage[];
  didCancel: any;
  error: any;
}

export const usePickFileHook = () => {
  const dispatch = useAppDispatch();

  const onButtonPress = useCallback(() => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'mixed',
        includeBase64: false,
        includeExtra: true,
        selectionLimit: 5,
      },
      //@ts-ignore
      (response: IResponse) => {
        if (response.didCancel) {
        } else if (response?.error) {
          console.log('ImagePicker Error: ', response?.error);
        } else {
          if (response.assets) {
            response.assets.map(image => {
              let uri =
                Platform.OS === 'ios'
                  ? image.uri.replace('file://', '')
                  : image.uri;
              let type = image.type;
              let name = image.fileName;

              const source = {uri, type, name};

              dispatch(addFile(source));
            });
          }
        }
      },
    );
  }, [dispatch]);

  return {onButtonPress};
};
