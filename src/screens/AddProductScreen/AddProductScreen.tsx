import React, {useState} from 'react';

import {HeaderDashboard, StepsAddProduct} from '../../components';

import {View} from 'react-native';

import {useCallback} from 'react';

import * as ImagePicker from 'react-native-image-picker';

import {Platform} from 'react-native';
import {StepBasicInformationProduct} from '../../components/molecules/StepBasicInformationProduct/StepBasicInformationProduct';
import {StepUploadFiles} from '../../components/molecules/StepUploadFiles/StepUploadFiles';
import {StepLocationProduct} from '../../components/molecules/StepLocationProduct/StepLocationProduct';
export const usePickDocumentHook = () => {
  const [documents, setDocuments] = useState<any[]>([]);

  const onButtonPress = useCallback(() => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'mixed',
        includeBase64: false,
        includeExtra: true,
        selectionLimit: 5,
      },
      response => {
        if (response.assets) {
          response.assets.map(image => {
            let uri =
              Platform.OS === 'ios'
                ? image.uri.replace('file://', '')
                : image.uri;
            let type = image.type;
            let name = image.fileName;

            const source = {uri, type, name};

            setDocuments([...documents, source]);
          });
        }

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

              setDocuments([...documents, source]);
            });
          }
        }
      },
    );
  }, []);

  return {documents, onButtonPress, setDocuments};
};

const Steps = {
  0: StepBasicInformationProduct,
  1: StepUploadFiles,
  2: StepLocationProduct,
};

export const AddProductScreen = () => {
  const [step, setStep] = useState(1);

  //@ts-ignore
  const Step = Steps[step];

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderDashboard />
      <StepsAddProduct step={step} setStep={setStep} />

      <Step />
    </View>
  );
};
