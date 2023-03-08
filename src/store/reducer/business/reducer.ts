import {createReducer} from '@reduxjs/toolkit';
import {initialState} from './initialState';

import {readProductsRequest, readProductsSuccess} from './actions';

export const authReducer = createReducer(initialState, builder => {
  builder
    .addCase(readProductsRequest, (state, action) => {})
    .addCase(readProductsSuccess, (state, action) => {});
});
