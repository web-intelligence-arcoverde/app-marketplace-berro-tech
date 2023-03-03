import axios from 'axios';
import {all, call, put, takeLatest} from 'redux-saga/effects';

const getPosts = () =>
  axios.get<any[]>('https://jsonplaceholder.typicode.com/todos');

function* fetchPostsSaga(): any {
  try {
    const response = yield call(getPosts);

    console.log(response);
  } catch (e) {
    console.log(e);
  }
}

function* authSagas() {
  yield all([takeLatest('user/sign-in', fetchPostsSaga)]);
}

export default authSagas;
