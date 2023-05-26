import { all, call, takeLatest, put } from 'redux-saga/effects';
import { signUpRequest } from './service';

import { StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function* signInEmail(): any {
  try {
  } catch (e) {
    console.log(e);
  }
}


function* signUp({ payload }: any): any {
  try {
    const router = payload.router
    delete payload.router
    const { data: { token, user } } = yield call(() => signUpRequest(payload));
    AsyncStorage.setItem('access_token', token)

    //yield put(router('SplashScreen'))

  } catch (e) {
    console.log(e);
  }
}

function* authSagas() {
  yield all([takeLatest('user/sign-in-email-request', signInEmail), takeLatest('user/sign-up-step-02', signUp)]);
}

export default authSagas;
