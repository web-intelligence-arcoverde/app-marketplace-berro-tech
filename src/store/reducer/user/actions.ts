import {createAction} from '@reduxjs/toolkit';
import {
  IUserState,
  IChangerStepEditProfile,
  ISignIn,
  IRecoveryAccountSendEmail,
  IRecoveryAccountSendCode,
  ISignUp,
} from './types';

/*

 # Acoes do usuario

*/

export const signInRequest = createAction<ISignIn>('user/sign-in-request');

export const readInformationUserRequest = createAction(
  'user/sign-information-user-request',
);

export const readInformationUserSuccess = createAction<IUserState>(
  'user/sign-information-user-success',
);

export const changerStepEditProfile = createAction<IChangerStepEditProfile>(
  'user/changer-step-edit-profile',
);

export const changerIndexBottomSheetRecentSearch = createAction<{
  index: number;
}>('user/changer-index-bottom-sheet-recent-search');

export const signUpSuccess = createAction<{
  user: IUserState;
  token: '';
}>('user/sign-up-success');

export const readSellerRequest = createAction<number>(
  'user/read-seller-request',
);

export const readSellerSuccess = createAction<{
  user: IUserState;
}>('user/read-seller-succes');

export const signInRequestFacebook = createAction(
  'user/sign-in-request-facebook',
);

export const sendEmailRecoveryAccountRequest =
  createAction<IRecoveryAccountSendEmail>(
    'user/send-email-recovery-account-request',
  );

export const sendCodeRecoveryAccountRequest =
  createAction<IRecoveryAccountSendCode>(
    'user/send-code-recovery-account-request',
  );

export const signUpStep01 = createAction<ISignUp>('user/sign-up-step-01');

export const signUpStep02 = createAction<ISignUp>('user/sign-up-step-02');
