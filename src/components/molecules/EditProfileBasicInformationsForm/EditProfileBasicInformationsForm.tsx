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

  const {name, email, phone} = useAppSelector(state => state.user.user);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name,
      email,
      phone,
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
