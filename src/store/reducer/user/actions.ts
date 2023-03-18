import {createAction} from '@reduxjs/toolkit';
import {IUserState, IChangerStepEditProfile} from './types';

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
