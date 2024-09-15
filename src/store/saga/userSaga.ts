import { call, put, takeLatest } from 'redux-saga/effects';

import { UserRepository } from '@repositories/UserRepository';
import { USER_ACTION_TYPES } from '@store/user/types';
import {
  editUserRequest,
  editUserSuccess,
  editUserFail,
  fetchUserByIdRequest,
  fetchUserByIdSuccess,
  fetchUserByIdFail,
} from '@store/user/userActions';
import { User } from '@type/models/User';

const userRepository = new UserRepository();

function* editUserSaga(action: ReturnType<typeof editUserRequest>): Generator {
  try {
    const { id, userData } = action.payload as { id: string; userData: Partial<Omit<User, 'password'>> };

    yield call([userRepository, 'update'], id as string, userData as Partial<Omit<User, 'password'>>);

    const user = yield call([userRepository, 'findOne'], id);
    yield put(editUserSuccess(user as User));
  } catch (error) {
    yield put(editUserFail('Failed to edit user'));
  }
}

function* fetchUserByIdSaga(action: ReturnType<typeof fetchUserByIdRequest>): Generator {
  try {
    const userId = action.payload as string;
    const user = yield call([userRepository, 'findOne'], userId);

    if (user) {
      yield put(fetchUserByIdSuccess(user as User));
    } else {
      yield put(fetchUserByIdFail('User not found'));
    }
  } catch (error) {
    yield put(fetchUserByIdFail('Failed to fetch user by ID'));
  }
}

export function* userSaga() {
  yield takeLatest(USER_ACTION_TYPES.EDIT_USER_REQUEST, editUserSaga);
  yield takeLatest(USER_ACTION_TYPES.FETCH_USER_BY_ID_REQUEST, fetchUserByIdSaga);
}
