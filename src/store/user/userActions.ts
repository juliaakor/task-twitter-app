import { createAction } from '@store/types';
import { User } from '@type/models';

import { USER_ACTION_TYPES } from './types';

export const editUserRequest = (id: string, userData: Partial<Omit<User, 'password'>>) =>
  createAction(USER_ACTION_TYPES.EDIT_USER_REQUEST, { id, userData });
export const editUserSuccess = (user: User) => createAction(USER_ACTION_TYPES.EDIT_USER_SUCCESS, user);
export const editUserFail = (error: string) => createAction(USER_ACTION_TYPES.EDIT_USER_FAIL, error);

export const fetchUserByIdRequest = (id: string) => createAction(USER_ACTION_TYPES.FETCH_USER_BY_ID_REQUEST, id);
export const fetchUserByIdSuccess = (user: User) => createAction(USER_ACTION_TYPES.FETCH_USER_BY_ID_SUCCESS, user);
export const fetchUserByIdFail = (error: string) => createAction(USER_ACTION_TYPES.FETCH_USER_BY_ID_FAIL, error);

export const searchUsersRequest = (query: string) => createAction(USER_ACTION_TYPES.SEARCH_USERS_REQUEST, query);
export const searchUsersSuccess = (users: User[]) => createAction(USER_ACTION_TYPES.SEARCH_USERS_SUCCESS, users);
export const searchUsersFail = (error: string) => createAction(USER_ACTION_TYPES.SEARCH_USERS_FAIL, error);
