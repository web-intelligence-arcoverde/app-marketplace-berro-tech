import {all, call, takeLatest, put} from 'redux-saga/effects';
import {signUpRequest} from './service';

import {signUpSuccess} from '../user/actions';
import api from '../../../service';
import {readInformationUserLoggedSuccess, signInSuccess} from './actions';
import {store} from '../..';
import {Alert} from 'react-native';

function* signUp({payload}: any): any {
  try {
    const router = payload.router;

    delete payload.router;

    const {
      data: {token, user},
    } = yield call(() => signUpRequest(payload));

    yield put(signUpSuccess({user: user, token: token}));

    yield put(router('DashboardBottomNavigation'));
  } catch (e) {}
}

function* readInformationUser() {
  try {
    const {data} = yield call(api.get, '/user-informations');

    yield put(readInformationUserLoggedSuccess(data));
  } catch (e) {}
}

function* changerPassword({payload}: any): any {
  try {
    const router = payload.navigation;

    delete payload.router;

    const id = store.getState().auth.user.id;
    yield call(api.put, `/change-password/${id}`, payload.data);

    yield put(router('EditProfileScreen'));
  } catch (e) {
    console.log(e);
  }
}

function* userDelete({payload}: any): any {
  try {
    yield call(api.get, '/user-logged-delete');

    yield put(payload.router('EditProfileScreen'));
  } catch (error) {}
}

function* signIn({payload}: any): any {
  try {
    const router = payload.router;

    delete payload.router;

    const {
      data: {token},
    } = yield call(api.post, '/sign-in/', payload);

    yield put(signInSuccess(token.token));

    yield put(router('DashboardBottomNavigation'));
  } catch (e) {}
}

function* forgotPassword({payload}: any): any {
  let toast = payload.toast;
  delete payload.toast;

  try {
    yield call(api.post, '/user/forgot-password', {
      email: payload.email,
    });
  } catch (e) {
    toast.show('Este email não existe', {
      type: 'danger',
      placement: 'bottom',
      duration: 4000,
      animationType: 'zoom-in',
    });
  }
}

function* authSagas() {
  yield all([
    takeLatest('auth/sign-in-request', signIn),
    takeLatest('user/sign-up-step-02', signUp),
    takeLatest(
      'auth/read-information-user-logged-request',
      readInformationUser,
    ),
    takeLatest('auth/changer-password-request', changerPassword),
    takeLatest('auth/user-logged-delete-request', userDelete),
    takeLatest('auth/forgot-password-request', forgotPassword),
  ]);
}

export default authSagas;
