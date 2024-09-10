import { User } from '@type/models/User';
import { UserLogin } from '@type/models/UserLogin';

export interface AuthState {
  error: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | UserLogin | null;
}

export const SIGN_IN_REQUEST: string = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS: string = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAIL: string = 'SIGN_IN_FAIL';
export const SIGN_UP_REQUEST: string = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS: string = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAIL: string = 'SIGN_UP_FAIL';
export const SIGN_OUT_SUCCESS: string = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAIL: string = 'SIGN_OUT_FAIL';
export const SIGN_UP_WITH_GOOGLE_REQUEST: string = 'SIGN_UP_WITH_GOOGLE_REQUEST';
export const SIGN_UP_WITH_GOOGLE_SUCCESS: string = 'SIGN_UP_WITH_GOOGLE_SUCCESS';
export const SIGN_UP_WITH_GOOGLE_FAIL: string = 'SIGN_UP_WITH_GOOGLE_FAIL';

interface SignInRequestAction {
  type: typeof SIGN_IN_REQUEST;
  payload: UserLogin;
}

interface SignInSuccessAction {
  type: typeof SIGN_IN_SUCCESS;
  payload: User;
}

interface SignInFailAction {
  type: typeof SIGN_IN_FAIL;
  payload: string;
}

interface SignUpRequestAction {
  type: typeof SIGN_UP_REQUEST;
  payload: User;
}

interface SignUpSuccessAction {
  type: typeof SIGN_UP_SUCCESS;
  payload: User;
}

interface SignUpFailAction {
  type: typeof SIGN_UP_FAIL;
  payload: string;
}

interface SignOutSuccessAction {
  type: typeof SIGN_OUT_SUCCESS;
}

interface SignOutFailAction {
  type: typeof SIGN_OUT_FAIL;
  payload: string;
}

interface SignUpWithGoogleRequestAction {
  type: typeof SIGN_UP_WITH_GOOGLE_REQUEST;
}

interface SignUpWithGoogleSuccessAction {
  type: typeof SIGN_UP_WITH_GOOGLE_SUCCESS;
  payload: User;
}

interface SignUpWithGoogleFailAction {
  type: typeof SIGN_UP_WITH_GOOGLE_FAIL;
  payload: string;
}

export type AuthActionTypes =
  | SignInRequestAction
  | SignInSuccessAction
  | SignInFailAction
  | SignUpRequestAction
  | SignUpSuccessAction
  | SignUpFailAction
  | SignOutSuccessAction
  | SignOutFailAction
  | SignUpWithGoogleRequestAction
  | SignUpWithGoogleSuccessAction
  | SignUpWithGoogleFailAction;

export const AUTH_ACTION_TYPES = {
  SIGN_IN_FAIL: 'SIGN_IN_FAIL',
  SIGN_IN_REQUEST: 'SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_OUT_FAIL: 'SIGN_OUT_FAIL',
  SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
  SIGN_UP_FAIL: 'SIGN_UP_FAIL',
  SIGN_UP_REQUEST: 'SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_WITH_GOOGLE_FAIL: 'SIGN_UP_WITH_GOOGLE_FAIL',
  SIGN_UP_WITH_GOOGLE_REQUEST: 'SIGN_UP_WITH_GOOGLE_REQUEST',
  SIGN_UP_WITH_GOOGLE_SUCCESS: 'SIGN_UP_WITH_GOOGLE_SUCCESS',
} as const;
