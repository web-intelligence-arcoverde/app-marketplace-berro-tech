import React from 'react';

import {View} from 'react-native';

import {Button, Input, CustomInput} from '../../';

import {
  useAppDispatch,
  useAppSelector,
  useNavigationHook,
} from '../../../hooks';

import {useForm} from 'react-hook-form';

import {scale} from '../../../utils';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  userEditBasicInformationRequest,
  userLoggedDeleteRequest,
} from '../../../store/reducer/user/actions';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    phone: yup.string().required(),
  })
  .required();

export const EditProfileBasicInformationsForm = () => {
  const {goToRouter} = useNavigationHook();

  const {contacts, name, email} = useAppSelector(state => state.auth.user);

  const {image_user} = useAppSelector(state => state.user);

  const {phone_number} =
    contacts.length >= 1 ? contacts[0] : {phone_number: ''};

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name,
      email,
      phone: phone_number,
    },
  });

  const dispatch = useAppDispatch();

  const onSubmit = (data: any) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('avatar_url', image_user);
    dispatch(userEditBasicInformationRequest(formData));
  };

  return (
    <View style={{gap: scale(16)}}>
      <Input
        control={control}
        label="Nome"
        name="name"
        errors={errors?.name?.message}
      />
      <Input
        control={control}
        label="Email"
        name="email"
        errors={errors?.email?.message}
      />
      <CustomInput
        control={control}
        label="Telefone"
        name="phone"
        mask="phone"
        errors={errors?.phone?.message}
      />

      <Button
        title="Alterar senha"
        onPress={() => goToRouter('ProfileChangerPasswordScreen')}
        variant="none"
      />
      <Button
        title="Excluir minha conta"
        onPress={() => dispatch(userLoggedDeleteRequest({router: goToRouter}))}
        variant="noneSecondary"
      />

      <Button
        title="Salvar alterações"
        onPress={handleSubmit(onSubmit)}
        variant="containedThirdy"
      />
    </View>
  );
};
