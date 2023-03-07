import {all, call, takeLatest, put} from 'redux-saga/effects';
import {signInGoogleRequest} from './service';

import {CommonActions} from '@react-navigation/native';

function* signInGoogle(): any {
  try {
    const response = yield call(signInGoogleRequest);

    console.log(response);
  } catch (e) {
    console.log(e);
  }
}

const routerDash = 'DashboardBottomNavigation';

function* signInEmail(): any {
  try {
  } catch (e) {
    console.log(e);
  }
}

function* authSagas() {
  yield all([takeLatest('user/sign-in-request-google', signInGoogle)]);
  yield all([takeLatest('user/sign-in-email-request', signInEmail)]);
}

export default authSagas;
