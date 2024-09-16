import { all, fork } from 'redux-saga/effects';

import { authSaga } from '@store/saga/authSaga';
import { tweetSaga } from '@store/saga/tweetSaga';
import { userSaga } from '@store/saga/userSaga';

export function* generalSaga() {
  yield all([fork(authSaga), fork(tweetSaga), fork(userSaga)]);
}
