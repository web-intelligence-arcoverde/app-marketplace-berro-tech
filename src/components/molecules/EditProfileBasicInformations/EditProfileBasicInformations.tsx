import {View, ScrollView} from 'react-native';

import {Button, Text, Input, Separator, EditProfileChangeImage} from '../../';

import {useAppSelector, useNavigationHook} from '../../../hooks';

import {useForm} from 'react-hook-form';

import {CustomInput} from '../../atoms/CustomInput/CustomInput';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    phone: yup
      .string()
      .required()
      .matches(
        /^(\+\d{1,2}-)?\(?\d{3}\)?[-]\d{7}$/,
        'Cell phone must have 12 digits at max',
      ),
  })
  .required();

export const EditProfileBasicInformations = () => {
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

  console.log(control);

  const onSubmit = data => console.log(data);

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
          <Button title="Excluir conta" onPress={() => {}} variant="none" />

          <Button
            title="Salvar Alterações"
            onPress={() => console.log('exa')}
            variant="containedThirdy"
          />
        </View>
      </View>
    </ScrollView>
  );
};
