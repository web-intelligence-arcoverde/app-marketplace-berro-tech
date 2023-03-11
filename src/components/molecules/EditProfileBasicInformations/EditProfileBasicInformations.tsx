import {useState, useCallback} from 'react';
import {View, ScrollView} from 'react-native';

import {Button, Text, Input, Separator, EditProfileChangeImage} from '../../';

import {useNavigationHook} from '../../../hooks';

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

  return (
    <ScrollView>
      <View style={{paddingHorizontal: 20}}>
        <EditProfileChangeImage />
        <Separator height={20} />
        <Text typography="h3" colorFamily="gray" colorVariant="_01">
          Suas Informações
        </Text>
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
