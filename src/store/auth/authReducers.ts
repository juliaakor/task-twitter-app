import { Reducer } from 'redux';

import { User } from '@type/models/User';

import { AuthActionTypes, AuthState, AUTH_ACTION_TYPES } from './types';

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  signInError: null,
  signOutError: null,
  signUpError: null,
  user: null,
};

interface PayloadString {
  payload: string;
}

interface PayloadUser {
  payload: User;
}

export const authReducer: Reducer<AuthState, AuthActionTypes> = (state = initialState, action): AuthState => {
  switch (action.type) {
    case AUTH_ACTION_TYPES.SIGN_IN_REQUEST:
    case AUTH_ACTION_TYPES.SIGN_UP_REQUEST:
    case AUTH_ACTION_TYPES.SIGN_UP_WITH_GOOGLE_REQUEST:
    case AUTH_ACTION_TYPES.SIGN_OUT_REQUEST:
      return {
        ...initialState,
        isLoading: true,
      };
    case AUTH_ACTION_TYPES.SIGN_IN_SUCCESS:
    case AUTH_ACTION_TYPES.SIGN_UP_SUCCESS:
    case AUTH_ACTION_TYPES.SIGN_UP_WITH_GOOGLE_SUCCESS:
      return {
        ...initialState,
        isAuthenticated: true,
        user: (action as PayloadUser).payload,
      };
    case AUTH_ACTION_TYPES.SIGN_IN_FAIL:
      return {
        ...initialState,
        isLoading: false,
        signInError: (action as PayloadString).payload,
      };
    case AUTH_ACTION_TYPES.SIGN_UP_FAIL:
    case AUTH_ACTION_TYPES.SIGN_UP_WITH_GOOGLE_FAIL:
      return {
        ...initialState,
        isLoading: false,
        signUpError: (action as PayloadString).payload,
      };
    case AUTH_ACTION_TYPES.SIGN_OUT_FAIL:
      return {
        ...initialState,
        isLoading: false,
        signOutError: (action as PayloadString).payload,
      };
    case AUTH_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
