import React from 'react';

import {View} from 'react-native';

import {
  Button,
  Text,
  Input,
  Separator,
  KeyboardContainer,
} from '../../components';

import {useForm} from 'react-hook-form';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {ErrorMessage} from '../../locale';
import {useAppDispatch} from '../../hooks';
import {changerPasswordRequest} from '../../store/reducer/auth/actions';
import {useToast} from 'react-native-toast-notifications';

const schema = yup
  .object({
    currentPassword: yup
      .string()
      .required(ErrorMessage['password-required'])
      .min(8, ErrorMessage['password-min']),
    newPassword: yup
      .string()
      .required(ErrorMessage['confirmation-password-required'])
      .min(8, ErrorMessage['password-min']),
  })
  .required();

export const ProfileChangerPasswordScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
    },
  });

  const dispatch = useAppDispatch();
  const toast = useToast();

  const onSubmit = handleSubmit(data =>
    dispatch(changerPasswordRequest({data, toast})),
  );

  return (
    <KeyboardContainer>
      <View style={{paddingHorizontal: 20}}>
        <Text typography="h3">Alterar senha</Text>
        <Separator height={20} />
        <View style={{gap: 20}}>
          <Input
            label="Senha atual"
            placeholder="No mínimo 8 dígitos"
            password
            control={control}
            name="currentPassword"
            rightIcon
            errors={errors?.currentPassword?.message}
          />
          <Input
            label="Nova senha"
            placeholder="A mesma senha de cima"
            password
            control={control}
            rightIcon
            name="newPassword"
            errors={errors?.newPassword?.message}
          />

          <Button
            title="Salvar Alterações"
            onPress={() => onSubmit()}
            variant="containedThirdy"
          />
        </View>
      </View>
    </KeyboardContainer>
  );
};
