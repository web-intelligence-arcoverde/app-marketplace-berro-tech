import {createAction} from '@reduxjs/toolkit';
import {IProduct} from './types';

export const readProductsRequest = createAction<string>(
  'business/read-products-request',
);

export const readProductsSuccess = createAction<Array<IProduct>>(
  'business/read-products-success',
);
