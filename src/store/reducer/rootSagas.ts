import {all, fork} from 'redux-saga/effects';
import authSagas from './auth/sagas';
import userSagas from './user/sagas';
import productSagas from './product/sagas';

export function* rootSaga() {
  yield all([fork(authSagas), fork(userSagas), fork(productSagas)]);
}
