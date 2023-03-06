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

export const SignUpScreenStep02 = () => {
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
        variant="outlinedThirdyWithIcon"
        icon="arrow-left"
        onPress={() => setStep(0)}
      />
      <Input
        label="Senha"
        placeholder="No mínimo 8 dígitos"
        password
        control={control}
        name="password"
      />
      <Input
        label="Repita a senha"
        placeholder="A mesma senha de cima"
        password
        control={control}
        name="confirmationPassword"
      />
      <Button
        title="Criar conta"
        variant="contained"
        onPress={() => setStep(0)}
      />
    </View>
  );
};
