import {View} from 'react-native';

import {Button, Text, Input, Separator} from '../../';

import {useForm} from 'react-hook-form';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
  })
  .required();

export const EditProfileLocationInformation = () => {
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
    <View style={{paddingHorizontal: 20}}>
      <Text typography="h3">Localização</Text>
      <Separator height={20} />
      <View style={{gap: 20}}>
        <Input control={control} label="Estado" name="name" />
        <Input control={control} label="Cidade" name="email" />

        <Button
          title="Salvar Alterações"
          onPress={() => {}}
          variant="containedThirdy"
        />
      </View>
    </View>
  );
};
