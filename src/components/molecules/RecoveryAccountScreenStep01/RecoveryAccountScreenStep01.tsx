import React from 'react';
import {Input, Separator, Button} from '../..';
import {StepContextRecovery} from '../../../screens';

export const RecoveryAccountScreenStep01 = () => {
  const [step, setStep] = React.useContext(StepContextRecovery);

  return (
    <>
      <Input label="Email" placeholder="Seu melhor email" />
      <Separator height={20} />
      <Button
        title="Recuperar conta"
        variant="contained"
        onPress={() => setStep(1)}
      />
    </>
  );
};
