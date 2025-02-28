import { call, put, takeLatest } from 'redux-saga/effects';

import { UserAuthRepository } from '@repositories/UserAuthRepository';
import {
  signInSuccess,
  signInFail,
  signUpSuccess,
  signUpFail,
  signOutSuccess,
  signUpRequest,
  signUpWithGoogleSuccess,
  signUpWithGoogleFail,
  signOutFail,
} from '@store/auth/authActions';
import { AUTH_ACTION_TYPES } from '@store/auth/types';
import { User, UserLogin, UserRegistration } from '@type/models';

const authRepository = new UserAuthRepository();

function* signUpSaga(action: ReturnType<typeof signUpRequest>): Generator {
  try {
    const userData = yield call([authRepository, 'signUpUser'], action.payload as UserRegistration);

    if (userData) {
      yield put(signUpSuccess(userData as User));
    } else {
      yield put(signUpFail('Sign up failed'));
    }
  } catch (error) {
    yield put(signUpFail('An error occurred during sign up'));
  }
}

function* signInSaga(action: { type: string; payload: UserLogin }): Generator {
  try {
    const user = yield call([authRepository, 'signInUser'], action.payload);
    if (user) {
      yield put(signInSuccess(user as User));
    } else {
      yield put(signInFail('Invalid email/phone or password'));
    }
  } catch (error) {
    yield put(signInFail('Sign in failed'));
  }
}

function* signOutSaga(): Generator {
  try {
    yield call([authRepository, 'signOut']);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFail('An error occurred during sign out'));
  }
}

function* signUpWithGoogleSaga(): Generator {
  try {
    const userData = yield call([authRepository, 'signUpUserWithGoogle']);

    if (userData) {
      yield put(signUpWithGoogleSuccess(userData as User));
    } else {
      yield put(signUpWithGoogleFail('Failed to sign up with Google'));
    }
  } catch (error) {
    yield put(signUpWithGoogleFail('An error occurred during Google sign-up'));
  }
}

export function* authSaga() {
  yield takeLatest(AUTH_ACTION_TYPES.SIGN_IN_REQUEST, signInSaga);
  yield takeLatest(AUTH_ACTION_TYPES.SIGN_UP_REQUEST, signUpSaga);
  yield takeLatest(AUTH_ACTION_TYPES.SIGN_OUT_REQUEST, signOutSaga);
  yield takeLatest(AUTH_ACTION_TYPES.SIGN_UP_WITH_GOOGLE_REQUEST, signUpWithGoogleSaga);
}
