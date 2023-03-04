import React, {useState} from 'react';
import {
  Separator,
  Button,
  DescriptionInformationUserRecoveryAccountScreen,
  ConfirmationCodeInputRecoveryAccount,
} from '../..';

import {useAppDispatch, useChronometerHook} from '../../../hooks';

import {
  sendEmailRecoveryAccountRequest,
  sendCodeRecoveryAccountRequest,
} from '../../../store/reducer/auth/actions';

export const RecoveryAccountScreenStep02 = () => {
  const {handleStart, chronometer} = useChronometerHook();
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('brennoguedes9@gmail.com');
  const [confirmationCode, setConfirmationCode] = useState('');

  const dispatch = useAppDispatch();

  let isAtZero = chronometer === '00:00';
  let isAtZeroStyle = !isAtZero ? 'disabled' : 'containedSecondary';

  function resendCodeConfirmation() {
    dispatch(sendEmailRecoveryAccountRequest({email}));
    handleStart();
  }

  return (
    <>
      <DescriptionInformationUserRecoveryAccountScreen email={email} />
      <ConfirmationCodeInputRecoveryAccount value={value} setValue={setValue} />
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
