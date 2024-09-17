import { call, put, takeLatest } from 'redux-saga/effects';

import { passwordResetSuccess } from '@lib/toasts';
import { UserRepository } from '@repositories/UserRepository';
import { updateUserSuccess } from '@store/auth/authActions';
import { EditUserProps, USER_ACTION_TYPES } from '@store/user/types';
import {
  editUserRequest,
  editUserSuccess,
  editUserFail,
  fetchUserByIdRequest,
  fetchUserByIdSuccess,
  fetchUserByIdFail,
  updatePasswordSuccess,
  updatePasswordFail,
  updatePasswordRequest,
  searchUsersSuccess,
  searchUsersFail,
  searchUsersRequest,
} from '@store/user/userActions';
import { User, UserWithoutPassword } from '@type/models/User';

const userRepository = new UserRepository();

function* editUserSaga(action: ReturnType<typeof editUserRequest>): Generator {
  try {
    const { id, userData } = action.payload as EditUserProps;

    yield call([userRepository, 'update'], id as string, userData as UserWithoutPassword);

    const user = yield call([userRepository, 'findOne'], id);
    yield put(editUserSuccess(user as User));
    yield put(updateUserSuccess(user as User));
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

function* updatePasswordSaga(action: ReturnType<typeof updatePasswordRequest>): Generator {
  try {
    const { currentPassword, id, newPassword } = action.payload as {
      currentPassword: string;
      id: string;
      newPassword: string;
    };

    yield call([userRepository, 'updatePassword'], id, currentPassword, newPassword);
    yield call([userRepository, 'updateFirebaseAuthPassword'], currentPassword, newPassword);

    yield put(updatePasswordSuccess());
    yield passwordResetSuccess();
  } catch (error) {
    yield put(updatePasswordFail('Failed to update password'));
  }
}

function* searchUsersSaga(action: ReturnType<typeof searchUsersRequest>) {
  try {
    const userRepository = new UserRepository();
    const users: User[] = yield call([userRepository, 'searchUsers'], action.payload as string);
    yield put(searchUsersSuccess(users));
  } catch (error) {
    yield put(searchUsersFail('Some error occured while searching for users'));
  }
}

export function* userSaga() {
  yield takeLatest(USER_ACTION_TYPES.EDIT_USER_REQUEST, editUserSaga);
  yield takeLatest(USER_ACTION_TYPES.FETCH_USER_BY_ID_REQUEST, fetchUserByIdSaga);
  yield takeLatest(USER_ACTION_TYPES.UPDATE_PASSWORD_REQUEST, updatePasswordSaga);
  yield takeLatest(USER_ACTION_TYPES.SEARCH_USERS_REQUEST, searchUsersSaga);
}
