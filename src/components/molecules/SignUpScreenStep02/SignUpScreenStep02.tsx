import React, {useContext} from 'react';
import {Input, Separator, Button} from '../..';
import {StepContext} from '../../../screens';

export const SignUpScreenStep02 = () => {
  const [step, setStep] = React.useContext(StepContext);
  console.log(step);

  return (
    <>
      <Input label="Senha" placeholder="No mínimo 8 dígitos" password />
      <Separator height={20} />
      <Input
        label="Repita a senha"
        placeholder="A mesma senha de cima"
        password
      />
      <Separator height={20} />
      <Button
        title="Criar conta"
        variant="contained"
        onPress={() => setStep(0)}
      />
    </>
  );
};
