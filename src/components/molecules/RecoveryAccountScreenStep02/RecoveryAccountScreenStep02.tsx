import React, {useState} from 'react';
import {
  Separator,
  Button,
  DescriptionInformationUserRecoveryAccountScreen,
  ConfirmationCodeInputRecoveryAccount,
} from '../..';
import {SIZES} from '../../../common';

import {
  useAppDispatch,
  useHookStepsRecoveryAccount,
  useChronometerHook,
} from '../../../hooks';

import {
  forgotPasswordRequest,
  verifyTokenForgotPasswordRequest,
} from '../../../store/reducer/auth/actions';

import {useToast} from 'react-native-toast-notifications';

export const RecoveryAccountScreenStep02 = () => {
  const {handleStart, chronometer} = useChronometerHook();
  const [value, setValue] = useState('');

  const {email} = useHookStepsRecoveryAccount();

  const dispatch = useAppDispatch();

  const toast = useToast();

  let isAtZero = chronometer === '00:00';
  let isAtZeroStyle = !isAtZero ? 'disabled' : 'containedSecondary';

  function resendCodeConfirmation() {
    dispatch(forgotPasswordRequest({email}));
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
        onPress={() =>
          dispatch(verifyTokenForgotPasswordRequest({toast, code: value}))
        }
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
