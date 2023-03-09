import {useState, useCallback} from 'react';
import {Image, TouchableOpacity, View, ScrollView} from 'react-native';

import {Button, Text, Input, Separator} from '../../';

import {useAppSelector, useNavigationHook} from '../../../hooks';

import * as ImagePicker from 'react-native-image-picker';

import {useForm} from 'react-hook-form';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
  })
  .required();

export const EditProfileBasicInformations = () => {
  const {photo} = useAppSelector(state => state.user.user);

  const [response, setResponse] = useState<any>(null);

  const {goToRouter} = useNavigationHook();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
    },
  });

  const onButtonPress = useCallback(options => {
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
      } else if (response?.error) {
        console.log('ImagePicker Error: ', response?.error);
      } else {
        setResponse(response.assets[0].uri);
      }
    });
  }, []);

  function renderFileData() {
    if (response) {
      return (
        <Image
          resizeMode="stretch"
          source={{
            uri: response,
          }}
          style={{width: '100%', height: '100%', borderRadius: 6}}
        />
      );
    } else {
      return (
        <Image
          resizeMode="stretch"
          source={photo}
          style={{width: '100%', height: '100%', borderRadius: 6}}
        />
      );
    }
  }

  return (
    <ScrollView>
      <View style={{paddingHorizontal: 20}}>
        <TouchableOpacity
          style={{
            width: 'auto',
            height: 246,
          }}
          onPress={() =>
            onButtonPress({
              saveToPhotos: true,
              mediaType: 'photo',
              includeBase64: false,
              includeExtra: true,
            })
          }>
          {renderFileData()}
        </TouchableOpacity>
        <Separator height={20} />
        <Text typography="h3">Suas Informações</Text>
        <Separator height={20} />
        <View style={{gap: 20}}>
          <Input control={control} label="Nome" name="name" />
          <Input control={control} label="Email" name="email" />
          <Input control={control} label="Telefone" name="phone" />

          <Button
            title="Alterar senha"
            onPress={() => goToRouter('ProfileChangerPasswordScreen')}
            variant="none"
          />
          <Button title="Excluir conta" onPress={() => {}} variant="none" />

          <Button
            title="Salvar Alterações"
            onPress={() => {}}
            variant="containedThirdy"
          />
        </View>
      </View>
    </ScrollView>
  );
};
