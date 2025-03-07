import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, IconComponent, Separator, Button} from '../../';

import {useAppDispatch} from '../../../hooks';
import {addFile} from '../../../store/reducer/product/actions';

import {
  Container,
  ContainerInformation,
  ContainerFileList,
  ContainerFooter,
  AddNewFileButton,
} from './style';
import {FileItem} from '../FileItem/FileItem';

import {
  ContextEditProduct,
  IAppContextEditProduct,
} from '../../../context/ContextEditProduct';

export const ListFiles = ({onButtonPress}: any) => {
  const dispatch = useAppDispatch();
  const {files, setStep, removerFile} = useContext(
    ContextEditProduct,
  ) as IAppContextEditProduct;

  let limitFiles = files.length > 1 && files.length <= 5;

  let typeUrl = files[0]?.url?.split('.')?.reverse()[0];
  let typeUpload = files[0]?.type?.split('/')[0];

  let isVideo = typeUrl === 'mp4';
  let isVideoUploaded = typeUpload === 'video';

  let isVideoFile = isVideo || isVideoUploaded;

  return (
    <Container>
      <ContainerInformation>
        <Text typography="h4" colorFamily="gray" colorVariant="_02">
          Você fez upload de {files.length} arquivos
        </Text>
        <Separator />
        <Text typography="h4" colorFamily="gray" colorVariant="_04">
          Clique na lixeira para removê-lo
        </Text>
        <Separator />
        {isVideoFile && (
          <Text
            typography="h5"
            colorFamily="auxiliary"
            colorVariant="red_state">
            A capa não pode ser um video
          </Text>
        )}
        {!limitFiles && (
          <Text
            typography="h5"
            colorFamily="auxiliary"
            colorVariant="red_state">
            O minimo de arquivos são 2 e o máximo são 5
          </Text>
        )}
      </ContainerInformation>
      <ContainerFileList>
        {files[0].map((document: any, index: any) => {
          return (
            <FileItem
              document={document}
              index={index}
              removeFile={removerFile}
            />
          );
        })}
      </ContainerFileList>
      <ContainerFooter>
        <AddNewFileButton onPress={() => onButtonPress()}>
          <IconComponent icon="add-icon" />
        </AddNewFileButton>
        <Separator width={20} />
        <View style={styles.container}>
          <Button
            disabled={!limitFiles || isVideo}
            title="Próximo"
            variant="containedThirdy"
            onPress={() => {
              setStep(2);
              dispatch(addFile(files));
            }}
          />
        </View>
      </ContainerFooter>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '78%',
  },
});
