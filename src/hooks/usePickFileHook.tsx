import {useCallback, useContext} from 'react';
import {Platform} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

import {
  ContextEditProduct,
  IAppContextEditProduct,
} from '../context/ContextEditProduct';

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
  const {addFile} = useContext(ContextEditProduct) as IAppContextEditProduct;

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
            let files: any[] = [];

            response.assets.map(image => {
              let uri =
                Platform.OS === 'ios'
                  ? image.uri.replace('file://', '')
                  : image.uri;
              let type = image.type;
              let name = image.fileName;

              const source = {uri, type, name};

              files.push(source);
            });

            addFile(files);
          }
        }
      },
    );
  }, [addFile]);

  return {onButtonPress};
};
