import {View} from 'react-native';

import {Button, Input, CustomInput} from '../../';

import {useAppSelector, useNavigationHook} from '../../../hooks';

import {useForm} from 'react-hook-form';

import {scale} from '../../../utils';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

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

  const onSubmit = data => console.log(data);

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
        onPress={() => {}}
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
