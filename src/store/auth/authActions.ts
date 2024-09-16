import { createAction } from '@store/types';
import { User, UserLogin, UserRegistration } from '@type/models';

import { AUTH_ACTION_TYPES } from './types';

export const updateUserSuccess = (user: User) => createAction(AUTH_ACTION_TYPES.UPDATE_USER_SUCCESS, user);

export const signInRequest = (data: UserLogin) => createAction(AUTH_ACTION_TYPES.SIGN_IN_REQUEST, data);
export const signInSuccess = (user: User) => createAction(AUTH_ACTION_TYPES.SIGN_IN_SUCCESS, user);
export const signInFail = (error: string) => createAction(AUTH_ACTION_TYPES.SIGN_IN_FAIL, error);

export const signUpRequest = (data: UserRegistration) => createAction(AUTH_ACTION_TYPES.SIGN_UP_REQUEST, data);
export const signUpSuccess = (user: User) => createAction(AUTH_ACTION_TYPES.SIGN_UP_SUCCESS, user);
export const signUpFail = (error: string) => createAction(AUTH_ACTION_TYPES.SIGN_UP_FAIL, error);

export const signOutRequest = () => createAction(AUTH_ACTION_TYPES.SIGN_OUT_REQUEST);
export const signOutSuccess = () => createAction(AUTH_ACTION_TYPES.SIGN_OUT_SUCCESS);
export const signOutFail = (error: string) => createAction(AUTH_ACTION_TYPES.SIGN_OUT_FAIL, error);

export const signUpWithGoogle = () => createAction(AUTH_ACTION_TYPES.SIGN_UP_WITH_GOOGLE_REQUEST);
export const signUpWithGoogleSuccess = (user: User) =>
  createAction(AUTH_ACTION_TYPES.SIGN_UP_WITH_GOOGLE_SUCCESS, user);
export const signUpWithGoogleFail = (error: string) => createAction(AUTH_ACTION_TYPES.SIGN_UP_WITH_GOOGLE_FAIL, error);
