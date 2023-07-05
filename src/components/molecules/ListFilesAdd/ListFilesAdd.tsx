import React, {useContext} from 'react';
import {View} from 'react-native';
import {Text, IconComponent, Separator, Button} from '../..';

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
  ContextFormAddProduct,
  IAppContextAddProduct,
} from '../../../context/ContextContainerAddProduct';

export const ListFilesAdd = ({onButtonPress}: any) => {
  const dispatch = useAppDispatch();
  const {files, setStep, removerFile} = useContext(
    ContextFormAddProduct,
  ) as IAppContextAddProduct;

  let minFiles = files.length > 1;
  let maxFiles = files.length <= 5;

  let limitFiles = minFiles && maxFiles;

  let typeFile = files[0]?.type?.split('/')[0];

  let isFileVideo = typeFile === 'video';

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
        {isFileVideo && (
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
        {files.map((document: any, index: any) => {
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
        <View style={{width: '78%'}}>
          <Button
            disabled={!limitFiles || isFileVideo}
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
