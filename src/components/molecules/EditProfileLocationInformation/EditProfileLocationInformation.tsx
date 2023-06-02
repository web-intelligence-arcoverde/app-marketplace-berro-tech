import {View} from 'react-native';

import {Button, Text, Input, Separator, Dropdown} from '../../';

import {useForm} from 'react-hook-form';

import {scale} from '../../../utils';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {useAppSelector} from '../../../hooks';

const schema = yup
  .object({
    state: yup.string().required(),
    city: yup.string().required(),
  })
  .required();

export const EditProfileLocationInformation = () => {
  const {addresses} = useAppSelector(state => state.auth.user);

  const {state, city} =
    addresses.length >= 1 ? addresses[0] : {state: '', city: ''};

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {state: state, city: city},
  });

  const onSubmit = data => console.log(data);

  return (
    <View style={{paddingHorizontal: scale(20)}}>
      <Text typography="h3" colorFamily="gray" colorVariant="_01">
        Localização
      </Text>
      <Separator height={20} />
      <View style={{gap: 20}}>
        <Input
          control={control}
          label="Estado"
          name="state"
          errors={errors?.state?.message}
        />
        <Input
          control={control}
          label="Cidade"
          name="city"
          errors={errors?.city?.message}
        />

        <Button
          title="Salvar Alterações"
          onPress={handleSubmit(onSubmit)}
          variant="containedThirdy"
        />
      </View>
    </View>
  );
};
