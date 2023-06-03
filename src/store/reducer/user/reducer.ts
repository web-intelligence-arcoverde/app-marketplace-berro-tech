import {createReducer} from '@reduxjs/toolkit';
import {initialState} from './initialState';

import {
  readInformationUserRequest,
  readInformationUserSuccess,
  changerStepEditProfile,
  changerIndexBottomSheetRecentSearch,
  signUpSuccess,
  readSellerRequest,
  readSellerSuccess,
  signUpStep01,
  signUpStep02,
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
    .addCase(readSellerSuccess, (state, action) => {
      state.seller = action.payload;
      state.loadingSeller = false;
    });
});

/*


 .addCase(changerStepEditProfile, (state, action) => {
      state.step_edit_profile = action.payload.step_edit_profile;
    })
    .addCase(changerIndexBottomSheetRecentSearch, (state, action) => {
      state.bottom_sheet_index = action.payload.index;
    })
    .addCase(signUpSuccess, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    })
    .addCase(readSellerRequest, (state, action) => {
      state.loadingSeller = true;
    })
    .addCase(readSellerSuccess, (state, action) => {
      state.seller = action.payload;
      state.loadingSeller = false;
    })
    .addCase(signUpStep01, (state, action) => {
      state.userSignUp = action.payload;
    })
    .addCase(signUpStep02, (state, action) => {
      state.userSignUp = {...state.userSignUp, ...action.payload};
    });
    
    
*/
