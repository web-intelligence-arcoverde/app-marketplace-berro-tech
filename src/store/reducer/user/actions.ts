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

export const readStateRequest = createAction('user/read-state-request');
export const readStateSuccess = createAction<any[]>('user/read-state-success');

export const setVisibleStates = createAction<number>(
  'user/set-visible-bottom-sheet-states',
);

export const selectState = createAction<string>('user/select-state');

export const readCityByStateRequest = createAction<string>(
  'user/read-city-by-state-request',
);

export const readCityByStateSuccess = createAction<any[]>(
  'user/read-city-by-state-success',
);

export const setVisibleCity = createAction<number>(
  'user/set-visible-bottom-sheet-city',
);

export const updateUserAddressRequest = createAction<any>(
  'user/update-user-address-request',
);

export const updateUserAddressSuccess = createAction(
  'user/update-user-address-success',
);

export const selectCity = createAction<string>('user/select-city');

export const userEditBasicInformationRequest = createAction<any>(
  'user/user-edit-basic-information-request',
);
export const userEditBasicInformationSuccess = createAction<any>(
  'user/user-edit-basic-information-success',
);

export const setImageUserBasicInformation = createAction<any>(
  'user/set-image-user-basic-information',
);

export const updateUserBasicInformationRequest = createAction<any>(
  'user/update-user-basic-information-request',
);

export const updateUserBasicInformationSuccess = createAction<any>(
  'user/update-user-basic-information-success',
);

export const userLoggedDeleteRequest = createAction<any>(
  'user/user-logged-delete-request',
);
