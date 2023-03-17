import React from 'react';
import {Input, Button, CustomInput} from '../..';

import {useFormSignUpSteps} from '../../../hooks';
import {Container} from './style';

export const SignUpScreenStep01 = () => {
  const {control, errors, onSubmitForm, disabled, STEP_SIZE, TOTAL_STEPS} =
    useFormSignUpSteps();

  return (
    <Container>
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
        disabled={disabled}
        onPress={onSubmitForm}
      />
    </Container>
  );
};
