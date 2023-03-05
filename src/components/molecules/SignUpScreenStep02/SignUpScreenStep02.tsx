import React, {useContext} from 'react';
import {View} from 'react-native';
import {Input, Button} from '../..';
import {ContextSignUpScreenStep} from '../../../context';

export const SignUpScreenStep02 = () => {
  const [step, setStep] = useContext(ContextSignUpScreenStep);

  const STEP_SIZE = step + 1;
  const TOTAL_STEPS = 2;

  return (
    <View style={{gap: 16}}>
      <Button
        title={`Etapa ${STEP_SIZE} de ${TOTAL_STEPS}`}
        variant="outlinedThirdyWithIcon"
        icon="arrow-left"
        onPress={() => setStep(0)}
      />
      <Input label="Senha" placeholder="No mínimo 8 dígitos" password />
      <Input
        label="Repita a senha"
        placeholder="A mesma senha de cima"
        password
      />
      <Button
        title="Criar conta"
        variant="contained"
        onPress={() => setStep(0)}
      />
    </View>
  );
};
