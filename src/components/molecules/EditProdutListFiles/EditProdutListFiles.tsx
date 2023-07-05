import React from 'react';
import {View} from 'react-native';
import {Text, IconComponent, Separator, Button} from '../..';

import {
  useAppDispatch,
  useAppSelector,
  useNavigationHook,
} from '../../../hooks';
import {updateProductDocumentRequest} from '../../../store/reducer/product/actions';

import {
  Container,
  ContainerInformation,
  ContainerFileList,
  ContainerFooter,
  AddNewFileButton,
} from './style';
import {FileItem} from '../FileItem/FileItem';

export const EditProdutListFiles = ({
  files,
  onButtonPress,
  removerFile,
}: any) => {
  const dispatch = useAppDispatch();

  const product = useAppSelector(state => state.product.product.products[0]);

  const {goToRouter} = useNavigationHook();

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
        {files.map((document: any, index: any) => {
          return (
            <FileItem
              document={document}
              index={index}
              removerFile={removerFile}
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
            disabled={!limitFiles || isVideo}
            title="Atualizar"
            variant="containedThirdy"
            onPress={() => {
              let newImages = files.filter((item: any) => !!item.id === false);
              dispatch(
                updateProductDocumentRequest({id: product.id, newImages}),
              );
              goToRouter('DashboardBottomNavigation');
            }}
          />
        </View>
      </ContainerFooter>
    </Container>
  );
};
