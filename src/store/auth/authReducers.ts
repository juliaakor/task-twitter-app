import { Reducer } from 'redux';

import { User } from '@/types/models/User';

import {
  AuthActionTypes,
  AuthState,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAIL,
  SIGN_UP_WITH_GOOGLE_REQUEST,
  SIGN_UP_WITH_GOOGLE_SUCCESS,
  SIGN_UP_WITH_GOOGLE_FAIL,
  SIGN_OUT_REQUEST,
} from './types';

const initialState: AuthState = {
  error: null,
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

export const authReducer: Reducer<AuthState, AuthActionTypes> = (state = initialState, action): AuthState => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
    case SIGN_UP_REQUEST:
    case SIGN_UP_WITH_GOOGLE_REQUEST:
    case SIGN_OUT_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case SIGN_IN_SUCCESS:
    case SIGN_UP_SUCCESS:
    case SIGN_UP_WITH_GOOGLE_SUCCESS:
      return {
        ...state,
        error: null,
        isAuthenticated: true,
        isLoading: false,
        user: (action as { payload: User }).payload,
      };
    case SIGN_IN_FAIL:
    case SIGN_UP_FAIL:
    case SIGN_OUT_FAIL:
    case SIGN_UP_WITH_GOOGLE_FAIL:
      return {
        ...state,
        ...initialState,
        error: (action as { payload: string }).payload,
        isLoading: false,
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};
