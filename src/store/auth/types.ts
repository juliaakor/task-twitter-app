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
export const SIGN_OUT_REQUEST: string = 'SIGN_OUT_REQUEST';
export const SIGN_OUT_SUCCESS: string = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAIL: string = 'SIGN_OUT_FAIL';
export const SIGN_UP_WITH_GOOGLE_REQUEST: string = 'SIGN_UP_WITH_GOOGLE_REQUEST';
export const SIGN_UP_WITH_GOOGLE_SUCCESS: string = 'SIGN_UP_WITH_GOOGLE_SUCCESS';
export const SIGN_UP_WITH_GOOGLE_FAIL: string = 'SIGN_UP_WITH_GOOGLE_FAIL';

interface SignInRequestAction {
  type: string;
  payload: UserLogin;
}

interface SignInSuccessAction {
  type: string;
  payload: User;
}

interface SignInFailAction {
  type: string;
  payload: string;
}

interface SignUpRequestAction {
  type: string;
  payload: User;
}

interface SignUpSuccessAction {
  type: string;
  payload: User;
}

interface SignUpFailAction {
  type: string;
  payload: string;
}

interface SignOutRequestAction {
  type: string;
}

interface SignOutSuccessAction {
  type: string;
}

interface SignOutFailAction {
  type: string;
  payload: string;
}

interface SignUpWithGoogleRequestAction {
  type: string;
}

interface SignUpWithGoogleSuccessAction {
  type: string;
  payload: User;
}

interface SignUpWithGoogleFailAction {
  type: string;
  payload: string;
}

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

export const AUTH_ACTION_TYPES = {
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
} as const;
