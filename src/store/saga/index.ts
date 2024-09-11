import { all, fork } from 'redux-saga/effects';

import { authSaga } from '@store/saga/authSaga';

export function* generalSaga() {
  yield all([fork(authSaga)]);
}
