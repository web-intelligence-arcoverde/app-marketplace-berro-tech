import {all, call, takeLatest} from 'redux-saga/effects';

import {signInGoogleRequest} from './service';

function* signInGoogle(): any {
  try {
    const response = yield call(signInGoogleRequest);

    console.log(response);
  } catch (e) {
    console.log(e);
  }
}

function* authSagas() {
  yield all([takeLatest('user/sign-in-request-google', signInGoogle)]);
}

export default authSagas;
