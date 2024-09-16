import { Reducer } from 'redux';

import { User } from '@type/models';

import { USER_ACTION_TYPES, UserActionTypes, UserState } from './types';

const initialState: UserState = {
  error: null,
  isLoading: false,
  userInfo: null,
  users: [],
};

export const userReducer: Reducer<UserState, UserActionTypes> = (state = initialState, action): UserState => {
  switch (action.type) {
    case USER_ACTION_TYPES.EDIT_USER_REQUEST:
    case USER_ACTION_TYPES.SEARCH_USERS_REQUEST:
    case USER_ACTION_TYPES.FETCH_USER_BY_ID_REQUEST:
    case USER_ACTION_TYPES.UPDATE_PASSWORD_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case USER_ACTION_TYPES.EDIT_USER_SUCCESS:
    case USER_ACTION_TYPES.FETCH_USER_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: action.payload as User,
      };
    case USER_ACTION_TYPES.SEARCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload as User[],
      };
    case USER_ACTION_TYPES.UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case USER_ACTION_TYPES.EDIT_USER_FAIL:
    case USER_ACTION_TYPES.SEARCH_USERS_FAIL:
    case USER_ACTION_TYPES.FETCH_USER_BY_ID_FAIL:
    case USER_ACTION_TYPES.UPDATE_PASSWORD_FAIL:
      return {
        ...state,
        error: action.payload as string,
        isLoading: false,
      };
    default:
      return state;
  }
};
