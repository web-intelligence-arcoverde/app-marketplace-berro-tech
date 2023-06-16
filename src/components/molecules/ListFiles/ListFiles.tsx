import React, {useContext} from 'react';
import {View} from 'react-native';
import {Text, IconComponent, Separator, Button} from '../../';

import {useAppDispatch} from '../../../hooks';
import {addFile} from '../../../store/reducer/product/actions';
import {usePickFileHook} from '../../../hooks/usePickFileHook';

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

export const ListFiles = () => {
  const {onButtonPress} = usePickFileHook();

  const dispatch = useAppDispatch();
  const {files, setStep} = useContext(
    ContextFormAddProduct,
  ) as IAppContextAddProduct;

  let limitFiles = files.length > 1 && files.length <= 5;

  let type = files[0].type.split('/')[0];
  let isVideo = type === 'video';

  console.log(isVideo);

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
        {isVideo && (
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
          return <FileItem document={document} index={index} />;
        })}
      </ContainerFileList>
      <ContainerFooter>
        <AddNewFileButton onPress={() => onButtonPress()}>
          <IconComponent icon="add-icon" />
        </AddNewFileButton>
        <Separator width={20} />
        <View style={{width: '78%'}}>
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
