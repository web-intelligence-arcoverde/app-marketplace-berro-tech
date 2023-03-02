import React from 'react';
import {View} from 'react-native';
import {Input, Separator, Button, Text} from '../..';
import {StepContextRecovery} from '../../../screens';

export const RecoveryAccountScreenStep02 = () => {
  const [step, setStep] = React.useContext(StepContextRecovery);

  return (
    <>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text typography="h5" colorFamily="dark" colorVariant="_04">
          Verifique o código que enviamos pro seu email
        </Text>
        <Separator height={8} />
        <Text typography="h5" colorFamily="gray" colorVariant="_04">
          brennoguedes9@gmail.com
        </Text>
        <Separator height={24} />
      </View>
      <Input label="Email" placeholder="Seu melhor email" />
      <Separator height={24} />
      <Button title="Próximo" variant="contained" onPress={() => setStep(1)} />
      <Separator height={20} />
      <Button
        title={`Reenviar código (01:00)`}
        variant="disabled"
        onPress={() => setStep(1)}
      />
    </>
  );
};
