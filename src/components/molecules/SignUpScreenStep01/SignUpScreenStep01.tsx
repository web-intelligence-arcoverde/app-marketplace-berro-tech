import React from 'react';
import {Input, Separator, Button} from '../..';
import {StepContext} from '../../../screens';

export const SignUpScreenStep01 = () => {
  const [step, setStep] = React.useContext(StepContext);

  return (
    <>
      <Input label="Email" placeholder="Seu melhor email" />
      <Separator height={20} />
      <Input label="Nome" placeholder="Seu nome completo" />
      <Separator height={20} />
      <Input label="Telefone" placeholder="(_ _) _ _ _ _ _-_ _ _ _" />
      <Separator height={20} />
      <Button title="Próximo" variant="contained" onPress={() => setStep(1)} />
    </>
  );
};
