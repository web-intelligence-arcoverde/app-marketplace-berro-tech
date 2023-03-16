import React, {useContext} from 'react';
import {View} from 'react-native';
import {Input, Button, CustomInput} from '../..';
import {
  ContextSignUpScreenStep,
  IAppContextSignUpScreenStep,
} from '../../../context';

import {useForm} from 'react-hook-form';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {ErrorMessage} from '../../../locale';

const schema = yup.object({
  email: yup
    .string()
    .email(ErrorMessage['email-valid'])
    .required(ErrorMessage['email-required']),

  name: yup.string().required(ErrorMessage['name-required']),
  phone: yup.string().required(ErrorMessage['phone-required']),
});

export const SignUpScreenStep01 = () => {
  const {step} = useContext(
    ContextSignUpScreenStep,
  ) as IAppContextSignUpScreenStep;

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
      name: '',
      phone: '',
    },
  });

  const nextStep = data => {
    console.log(data);
    //setStep(1)
  };

  const onSubmit = data => console.log(data);

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
        errors={errors?.email?.message}
      />
      <Input
        label="Nome"
        placeholder="Seu nome completo"
        name="name"
        control={control}
        errors={errors?.name?.message}
      />
      <CustomInput
        control={control}
        label="Telefone"
        name="phone"
        mask="phone"
        placeholder="Digite seu numero"
        errors={errors?.phone?.message}
      />
      <Button
        title="Próximo"
        variant="contained"
        onPress={() => {
          handleSubmit(onSubmit)();
        }}
      />
    </View>
  );
};
