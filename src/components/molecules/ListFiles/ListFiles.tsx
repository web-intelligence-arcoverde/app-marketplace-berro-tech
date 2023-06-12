import React from 'react';
import {View} from 'react-native';
import {Text, IconComponent, Separator, Button} from '../../';

import {useAppDispatch, useAppSelector} from '../../../hooks';
import {changerStepProduct} from '../../../store/reducer/product/actions';
import {usePickFileHook} from '../../../hooks/usePickFileHook';

import {
  Container,
  ContainerInformation,
  ContainerFileList,
  ContainerFooter,
  AddNewFileButton,
} from './style';
import {FileItem} from '../FileItem/FileItem';

export const ListFiles = () => {
  const {onButtonPress} = usePickFileHook();

  const dispatch = useAppDispatch();
  const {files} = useAppSelector(state => state.product);

  let limitFiles = files.length <= 5 && files.length >= 1;

  return (
    <Container>
      <ContainerInformation>
        <Text typography="h4" colorFamily="gray" colorVariant="_02">
          Você fez upload de {files.length} arquivos
        </Text>
        <Separator height={4} />
        <Text typography="h4" colorFamily="gray" colorVariant="_04">
          Clique na lixeira para removê-lo
        </Text>
      </ContainerInformation>
      <ContainerFileList>
        {files.map((document, index) => {
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
            disabled={!limitFiles}
            title="Próximo"
            variant="containedThirdy"
            onPress={() => dispatch(changerStepProduct(2))}
          />
        </View>
      </ContainerFooter>
    </Container>
  );
};
