import React, {useContext} from 'react';
import {View} from 'react-native';
import {Input, Button} from '../..';
import {ContextSignUpScreenStep} from '../../../context';

import {useForm} from 'react-hook-form';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
  })
  .required();

export const SignUpScreenStep01 = () => {
  const [step, setStep] = useContext(ContextSignUpScreenStep);

  const STEP_SIZE = step + 1;
  const TOTAL_STEPS = 2;

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
    <View style={{gap: 16}}>
      <Button
        title={`Etapa ${STEP_SIZE} de ${TOTAL_STEPS}`}
        variant="outlinedThirdy"
        onPress={() => {}}
      />
      <Input
        label="Email"
        placeholder="Seu melhor email"
        name="email"
        control={control}
      />
      <Input
        label="Nome"
        placeholder="Seu nome completo"
        name="name"
        control={control}
      />
      <Input
        label="Telefone"
        placeholder="(_ _) _ _ _ _ _-_ _ _ _"
        name="phone"
        control={control}
      />
      <Button title="Próximo" variant="contained" onPress={() => setStep(1)} />
    </View>
  );
};
