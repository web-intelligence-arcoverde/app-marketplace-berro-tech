import {View} from 'react-native';

import {Button, Text, Input, Separator} from '../../';

import {useForm} from 'react-hook-form';

import {scale} from '../../../utils';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {useAppSelector} from '../../../hooks';

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
  })
  .required();

export const EditProfileLocationInformation = () => {
  const {address} = useAppSelector(state => state.user.user);

  const defaultValue = address
    ? {state: address?.state, city: address?.city}
    : {state: '', city: ''};

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValue,
  });

  const onSubmit = data => console.log(data);

  return (
    <View style={{paddingHorizontal: scale(20)}}>
      <Text typography="h3" colorFamily="gray" colorVariant="_01">
        Localização
      </Text>
      <Separator height={20} />
      <View style={{gap: 20}}>
        <Input control={control} label="Estado" name="name" />
        <Input control={control} label="Cidade" name="email" />

        <Button
          title="Salvar Alterações"
          onPress={handleSubmit(onSubmit)}
          variant="containedThirdy"
        />
      </View>
    </View>
  );
};
