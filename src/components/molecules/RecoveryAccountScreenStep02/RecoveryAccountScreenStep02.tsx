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
  useNavigationHook,
} from '../../../hooks';

import {
  sendEmailRecoveryAccountRequest,
  sendCodeRecoveryAccountRequest,
} from '../../../store/reducer/user/actions';

export const RecoveryAccountScreenStep02 = () => {
  const {handleStart, chronometer} = useChronometerHook();
  const [value, setValue] = useState('');
  const {goToRouter} = useNavigationHook();

  const {setStep, email} = useHookStepsRecoveryAccount();

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
        onPress={() => {
          dispatch(sendCodeRecoveryAccountRequest({code: ''}));
          goToRouter('SignInEmailScreen');
        }}
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
