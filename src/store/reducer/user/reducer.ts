import {createReducer} from '@reduxjs/toolkit';
import {initialState} from './initialState';

import {
  readCityByStateSuccess,
  readInformationUserRequest,
  readInformationUserSuccess,
  readSellerSuccess,
  readStateSuccess,
  selectCity,
  selectState,
  setVisibleCity,
  setVisibleStates,
} from './actions';

export const userReducer = createReducer(initialState, builder => {
  builder
    .addCase(readInformationUserRequest, state => {
      state.loading = true;
    })
    .addCase(readInformationUserSuccess, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
    .addCase(readSellerSuccess, (state, action) => {
      state.seller = action.payload;
      state.loadingSeller = false;
    })
    .addCase(readStateSuccess, (state, action) => {
      state.loadingStates = false;
      state.states = action.payload;
    })
    .addCase(selectState, (state, action) => {
      state.state = action.payload;
    })
    .addCase(setVisibleStates, (state, action) => {
      state.visible_bottom_sheet_states = action.payload;
    })
    .addCase(readCityByStateSuccess, (state, action) => {
      state.loadingCities = false;
      state.cities = action.payload;
    })
    .addCase(selectCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setVisibleCity, (state, action) => {
      state.visible_bottom_sheet_cities = action.payload;
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
