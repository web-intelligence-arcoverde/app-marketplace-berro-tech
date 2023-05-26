import {createReducer} from '@reduxjs/toolkit';
import {initialState} from './initialState';

import {
  readInformationUserRequest,
  readInformationUserSuccess,
  changerStepEditProfile,
  changerIndexBottomSheetRecentSearch,
  signUpSuccess,
} from './actions';

export const userReducer = createReducer(initialState, builder => {
  builder
    .addCase(readInformationUserRequest, (state, action) => {
      state.loading = true;
    })
    .addCase(readInformationUserSuccess, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
    .addCase(changerStepEditProfile, (state, action) => {
      state.step_edit_profile = action.payload.step_edit_profile;
    })
    .addCase(changerIndexBottomSheetRecentSearch, (state, action) => {
      state.bottom_sheet_index = action.payload.index;
    })
    .addCase(signUpSuccess, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    });
});
