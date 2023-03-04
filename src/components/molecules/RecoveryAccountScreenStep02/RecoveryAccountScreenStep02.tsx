import React, {useState} from 'react';
import {
  Separator,
  Button,
  DescriptionInformationUserRecoveryAccountScreen,
  ConfirmationCodeInputRecoveryAccount,
} from '../..';
import {SIZES} from '../../../common';

import {useAppDispatch, useChronometerHook} from '../../../hooks';

import {
  sendEmailRecoveryAccountRequest,
  sendCodeRecoveryAccountRequest,
} from '../../../store/reducer/auth/actions';

export const RecoveryAccountScreenStep02 = () => {
  const {handleStart, chronometer} = useChronometerHook();
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('brennoguedes9@gmail.com');

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
      <Separator height={SIZES.insideSpacingSmall} />
      <Button
        title="Próximo"
        variant="contained"
        onPress={() => dispatch(sendCodeRecoveryAccountRequest({code: ''}))}
      />
      <Separator height={SIZES.insideSpacingSmall} />
      <Button
        title={`Reenviar código (${chronometer})`}
        variant={isAtZeroStyle}
        disabled={!isAtZero}
        onPress={() => resendCodeConfirmation()}
      />
    </>
  );
};
