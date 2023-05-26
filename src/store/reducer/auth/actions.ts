import { createAction } from '@reduxjs/toolkit';
import {
  ISignInRequestEmail,
  IRecoveryAccountSendEmail,
  IRecoveryAccountSendCode, ISignUp
} from './types';

export const signInRequestFacebook = createAction(
  'user/sign-in-request-facebook',
);

export const signInRequestGoogle = createAction('user/sign-in-request-google');




export const signInRequestEmail = createAction<ISignInRequestEmail>(
  'user/sign-in-email-request',
);

export const sendEmailRecoveryAccountRequest =
  createAction<IRecoveryAccountSendEmail>(
    'user/send-email-recovery-account-request',
  );

export const sendCodeRecoveryAccountRequest =
  createAction<IRecoveryAccountSendCode>(
    'user/send-code-recovery-account-request',
  );


export const signUpStep01 = createAction<ISignUp>(
  'user/sign-up-step-01',
);

export const signUpStep02 = createAction<ISignUp>(
  'user/sign-up-step-02',
);