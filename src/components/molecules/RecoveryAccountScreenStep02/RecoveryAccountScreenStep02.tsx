import React from 'react';
import {
  Separator,
  Button,
  DescriptionInformationUserRecoveryAccountScreen,
  ConfirmationCodeInputRecoveryAccount,
} from '../..';
import {useAppDispatch, useHookStepsRecoveryAccount} from '../../../hooks';

import {useChronometerHook} from '../../../hooks/useChronometerHook';
import {
  sendEmailRecoveryAccountRequest,
  sendCodeRecoveryAccountRequest,
} from '../../../store/reducer/auth/actions';

export const RecoveryAccountScreenStep02 = () => {
  const {handleStart, chronometer} = useChronometerHook();

  const dispatch = useAppDispatch();

  let isAtZero = chronometer === '00:00';
  let isAtZeroStyle = !isAtZero ? 'disabled' : 'containedSecondary';

  function resendCodeConfirmation() {
    dispatch(
      sendEmailRecoveryAccountRequest({email: 'brennoguedes9@gmail.com'}),
    );
    handleStart();
  }

  return (
    <>
      <DescriptionInformationUserRecoveryAccountScreen />
      <ConfirmationCodeInputRecoveryAccount />
      <Separator height={24} />
      <Button
        title="Próximo"
        variant="contained"
        onPress={() => dispatch(sendCodeRecoveryAccountRequest({code: ''}))}
      />
      <Separator height={24} />
      <Button
        title={`Reenviar código (${chronometer})`}
        variant={isAtZeroStyle}
        disabled={!isAtZero}
        onPress={() => resendCodeConfirmation()}
      />
    </>
  );
};
