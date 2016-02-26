import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { ADD_TOAST, BURN_TOAST } from '../reducers/toasts';

const TOAST_TIMEOUT = 5000;

const wait = ms => (
  new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  })
);

function* toastQueue() {
  yield* takeEvery(ADD_TOAST, onToastAdded);
}

function* onToastAdded({ payload }) {
  if (payload.get('time') !== Infinity) {
    yield call(wait, payload.get('time', TOAST_TIMEOUT));
    yield put({ type: BURN_TOAST, payload: payload.get('id') });
  }
}

export default toastQueue;
