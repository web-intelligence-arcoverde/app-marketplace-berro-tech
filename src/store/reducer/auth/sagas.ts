import {all, call, takeLatest, put} from 'redux-saga/effects';
import {signUpRequest} from './service';

import api from '../../../service';
import {
  changerPasswordForgotPasswordSuccess,
  forgotPasswordSuccess,
  readInformationUserLoggedSuccess,
  signInSuccess,
  verifyTokenForgotPasswordSuccess,
  signUpSuccess,
} from './actions';
import {store} from '../..';

function* signUp({payload}: any): any {
  let router = payload.router;
  let toast = payload.toast;
  delete payload.router;
  delete payload.toast;

  try {
    let userCreate = {
      ...store.getState().auth.signUpForm,
      ...payload,
    };

    const {
      data: {token, user},
    } = yield call(() => signUpRequest(userCreate));

    yield put(signUpSuccess({user: user, token: token}));

    router('DashboardBottomNavigation');

    toast.show('Conta criada com success.', {
      type: 'success',
      placement: 'bottom',
      duration: 4000,
      animationType: 'zoom-in',
    });
  } catch (e) {
    toast.show('Este email já existe.', {
      type: 'danger',
      placement: 'bottom',
      duration: 4000,
      animationType: 'zoom-in',
    });
  }
}

function* readInformationUser() {
  try {
    const {data} = yield call(api.get, '/user-informations');

    yield put(readInformationUserLoggedSuccess(data));
  } catch (e) {}
}

function* changerPassword({payload}: any): any {
  let toast = payload.toast;
  delete payload.toast;
  try {
    const id = store.getState().auth.user.id;
    yield call(api.put, `/change-password/${id}`, payload.data);

    toast.show('Senha atualizada', {
      type: 'success',
      placement: 'bottom',
      duration: 4000,
      animationType: 'zoom-in',
    });
  } catch (e) {
    toast.show('Tente novamente.', {
      type: 'danger',
      placement: 'bottom',
      duration: 4000,
      animationType: 'zoom-in',
    });
  }
}

function* userDelete({payload}: any): any {
  try {
    yield call(api.get, '/user-logged-delete');

    yield put(payload.router('EditProfileScreen'));
  } catch (error) {}
}

function* signIn({payload}: any): any {
  let router = payload.router;
  let toast = payload.toast;
  delete payload.router;
  delete payload.toast;
  try {
    const {
      data: {token},
    } = yield call(api.post, '/sign-in/', payload);

    yield put(signInSuccess(token.token));

    router('DashboardBottomNavigation');

    toast.show('Seja bem-vindo', {
      type: 'success',
      placement: 'bottom',
      duration: 4000,
      animationType: 'zoom-in',
    });
  } catch (e) {
    toast.show('Credenciais incorretas', {
      type: 'danger',
      placement: 'bottom',
      duration: 4000,
      animationType: 'zoom-in',
    });
  }
}

function* forgotPassword({payload}: any): any {
  let toast = payload.toast;
  delete payload.toast;

  try {
    yield call(api.post, '/user/forgot-password', {
      email: payload.email,
    });

    yield put(forgotPasswordSuccess(payload.email));
  } catch (e) {
    toast.show('Este email não existe', {
      type: 'danger',
      placement: 'bottom',
      duration: 4000,
      animationType: 'zoom-in',
    });
  }
}

function* verifyTokenForgotPassword({payload}: any): any {
  let toast = payload.toast;
  delete payload.toast;

  try {
    const {data} = yield call(api.post, '/user/verify-token', {
      token: payload.code,
    });

    yield put(verifyTokenForgotPasswordSuccess(data.verifyToken));
  } catch (e) {
    toast.show('Código invalido', {
      type: 'danger',
      placement: 'bottom',
      duration: 4000,
      animationType: 'zoom-in',
    });
  }
}

function* changerPasswordForgotPassword({payload}: any): any {
  let toast = payload.toast;
  let router = payload.router;
  delete payload.toast;
  delete payload.router;

  try {
    const {confirmationPassword, password} = payload.data;

    const token = store.getState().auth.tokenRecoveryAccount;

    yield call(api.post, '/user/changer-password', {
      token,
      password,
      confirmationPassword,
    });

    toast.show('Senha alterada', {
      type: 'success',
      placement: 'bottom',
      duration: 4000,
      animationType: 'zoom-in',
    });

    yield put(router('SignInScreen'));

    yield put(changerPasswordForgotPasswordSuccess());
  } catch (e) {}
}

function* authSagas() {
  yield all([
    takeLatest('auth/sign-in-request', signIn),
    takeLatest('auth/sign-up-request', signUp),
    takeLatest(
      'auth/read-information-user-logged-request',
      readInformationUser,
    ),
    takeLatest('auth/changer-password-request', changerPassword),
    takeLatest('auth/user-logged-delete-request', userDelete),
    takeLatest('auth/forgot-password-request', forgotPassword),
    takeLatest(
      'auth/verify-token-forgot-password-request',
      verifyTokenForgotPassword,
    ),
    takeLatest(
      'auth/changer-password-forgot-password-request',
      changerPasswordForgotPassword,
    ),
  ]);
}

export default authSagas;
