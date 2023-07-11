import {createReducer} from '@reduxjs/toolkit';
import {initialState} from './initialState';

import {
  addProductUserLogged,
  changerIndexBottomSheetRecentSearch,
  changerStepEditProfile,
  readCityByStateSuccess,
  readInformationUserRequest,
  readInformationUserSuccess,
  readSellerSuccess,
  readStateSuccess,
  selectCity,
  selectState,
  setImageUserBasicInformation,
  setVisibleCity,
  setVisibleStates,
  signUpStep01,
  signUpStep02,
  userLoggedDeleteRequest,
} from './actions';
import {storeData} from '../../../hooks/useAsyncStorage';

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
    })
    .addCase(setImageUserBasicInformation, (state, action) => {
      state.image_user = action.payload;
    })
    .addCase(userLoggedDeleteRequest, () => {
      storeData('');
    })
    .addCase(changerIndexBottomSheetRecentSearch, (state, action) => {
      state.bottom_sheet_index = action.payload.index;
    })
    .addCase(changerStepEditProfile, (state, action) => {
      state.step_edit_profile = action.payload.step_edit_profile;
    })
    .addCase(signUpStep01, (state, action) => {
      state.userSignUp = action.payload;
    })
    .addCase(signUpStep02, (state, action) => {
      state.userSignUp = {...state.userSignUp, ...action.payload};
    })
    .addCase(addProductUserLogged, (state, action) => {
      state.user.products = [...state.user.products, action.payload];
    });
});
