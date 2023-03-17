import React from 'react';
import {Input, Button} from '../..';

import {Container} from './style';
import {useFormSignUpStep02} from '../../../hooks/useFormSignUpStep02';

export const SignUpScreenStep02 = () => {
  const {STEP_SIZE, TOTAL_STEPS, setStep, control, errors, onSubmitForm} =
    useFormSignUpStep02();

  return (
    <Container>
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
        rightIcon
        errors={errors?.password?.message}
      />
      <Input
        label="Repita a senha"
        placeholder="A mesma senha de cima"
        password
        control={control}
        rightIcon
        name="confirmationPassword"
        errors={errors?.confirmationPassword?.message}
      />
      <Button title="Criar conta" variant="contained" onPress={onSubmitForm} />
    </Container>
  );
};
