import React from 'react';
import {Input, Separator, Button, useHookStepsRecoveryAccount} from '../..';
import {SIZES} from '../../../common';
import {useNavigationHook} from '../../../hooks';

export const RecoveryAccountScreenStep01 = () => {
  const {setStep} = useHookStepsRecoveryAccount();

  const {goBack} = useNavigationHook();

  return (
    <>
      <Button
        title="Volta"
        onPress={() => goBack()}
        variant="outlinedSecondary"
        icon="arrow-left"
      />
      <Separator height={16} />
      <Input label="Email" placeholder="Seu melhor email" />
      <Separator height={SIZES.insideSpacingMedium} />
      <Button
        title="Recuperar conta"
        variant="contained"
        onPress={() => setStep(1)}
      />
    </>
  );
};
