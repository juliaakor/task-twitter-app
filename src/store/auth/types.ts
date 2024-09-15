import { User, UserLogin } from '@type/models';

import { BaseAction } from '../types';

export interface AuthState {
  signOutError: string | null;
  signInError: string | null;
  signUpError: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
}

export const AUTH_ACTION_TYPES: Record<string, string> = {
  SIGN_IN_FAIL: 'SIGN_IN_FAIL',
  SIGN_IN_REQUEST: 'SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_OUT_FAIL: 'SIGN_OUT_FAIL',
  SIGN_OUT_REQUEST: 'SIGN_OUT_REQUEST',
  SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
  SIGN_UP_FAIL: 'SIGN_UP_FAIL',
  SIGN_UP_REQUEST: 'SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_WITH_GOOGLE_FAIL: 'SIGN_UP_WITH_GOOGLE_FAIL',
  SIGN_UP_WITH_GOOGLE_REQUEST: 'SIGN_UP_WITH_GOOGLE_REQUEST',
  SIGN_UP_WITH_GOOGLE_SUCCESS: 'SIGN_UP_WITH_GOOGLE_SUCCESS',
};

interface SignInRequestAction extends BaseAction<typeof AUTH_ACTION_TYPES.SIGN_IN_REQUEST, UserLogin> {}
interface SignInSuccessAction extends BaseAction<typeof AUTH_ACTION_TYPES.SIGN_IN_SUCCESS, User> {}
interface SignInFailAction extends BaseAction<typeof AUTH_ACTION_TYPES.SIGN_IN_FAIL, string> {}

interface SignUpRequestAction extends BaseAction<typeof AUTH_ACTION_TYPES.SIGN_UP_REQUEST, User> {}
interface SignUpSuccessAction extends BaseAction<typeof AUTH_ACTION_TYPES.SIGN_UP_SUCCESS, User> {}
interface SignUpFailAction extends BaseAction<typeof AUTH_ACTION_TYPES.SIGN_UP_FAIL, string> {}

interface SignOutRequestAction extends BaseAction<typeof AUTH_ACTION_TYPES.SIGN_OUT_REQUEST> {}
interface SignOutSuccessAction extends BaseAction<typeof AUTH_ACTION_TYPES.SIGN_OUT_SUCCESS> {}
interface SignOutFailAction extends BaseAction<typeof AUTH_ACTION_TYPES.SIGN_OUT_FAIL, string> {}

interface SignUpWithGoogleRequestAction extends BaseAction<typeof AUTH_ACTION_TYPES.SIGN_UP_WITH_GOOGLE_REQUEST> {}
interface SignUpWithGoogleSuccessAction
  extends BaseAction<typeof AUTH_ACTION_TYPES.SIGN_UP_WITH_GOOGLE_SUCCESS, User> {}
interface SignUpWithGoogleFailAction extends BaseAction<typeof AUTH_ACTION_TYPES.SIGN_UP_WITH_GOOGLE_FAIL, string> {}

export type AuthActionTypes =
  | SignInRequestAction
  | SignInSuccessAction
  | SignInFailAction
  | SignUpRequestAction
  | SignUpSuccessAction
  | SignUpFailAction
  | SignOutRequestAction
  | SignOutSuccessAction
  | SignOutFailAction
  | SignUpWithGoogleRequestAction
  | SignUpWithGoogleSuccessAction
  | SignUpWithGoogleFailAction;
