import { BaseAction } from '@store/types';
import { User } from '@type/models';

export interface UserState {
  userInfo: User | null;
  error: string | null;
  isLoading: boolean;
}

export const USER_ACTION_TYPES: Record<string, string> = {
  EDIT_USER_FAIL: 'EDIT_USER_FAIL',
  EDIT_USER_REQUEST: 'EDIT_USER_REQUEST',
  EDIT_USER_SUCCESS: 'EDIT_USER_SUCCESS',

  FETCH_USER_BY_ID_FAIL: 'FETCH_USER_BY_ID_FAIL',
  FETCH_USER_BY_ID_REQUEST: 'FETCH_USER_BY_ID_REQUEST',
  FETCH_USER_BY_ID_SUCCESS: 'FETCH_USER_BY_ID_SUCCESS',

  SEARCH_USERS_FAIL: 'SEARCH_USERS_FAIL',
  SEARCH_USERS_REQUEST: 'SEARCH_USERS_REQUEST',
  SEARCH_USERS_SUCCESS: 'SEARCH_USERS_SUCCESS',
};

interface EditUserFailAction extends BaseAction<typeof USER_ACTION_TYPES.EDIT_USER_FAIL, string> {}
interface EditUserRequestAction
  extends BaseAction<
    typeof USER_ACTION_TYPES.EDIT_USER_REQUEST,
    { id: string; userData: Partial<Omit<User, 'password'>> }
  > {}
interface EditUserSuccessAction extends BaseAction<typeof USER_ACTION_TYPES.EDIT_USER_SUCCESS, User> {}

interface FetchUserByIdFailAction extends BaseAction<typeof USER_ACTION_TYPES.EDIT_USER_FAIL, string> {}
interface FetchUserByIdRequestAction extends BaseAction<typeof USER_ACTION_TYPES.EDIT_USER_REQUEST, string> {}
interface FetchUserByIdSuccessAction extends BaseAction<typeof USER_ACTION_TYPES.EDIT_USER_SUCCESS, User> {}

interface SearchUsersFailAction extends BaseAction<typeof USER_ACTION_TYPES.SEARCH_USERS_FAIL, string> {}
interface SearchUsersRequestAction extends BaseAction<typeof USER_ACTION_TYPES.SEARCH_USERS_REQUEST, string> {}
interface SearchUsersSuccessAction extends BaseAction<typeof USER_ACTION_TYPES.SEARCH_USERS_SUCCESS, User[]> {}

export type UserActionTypes =
  | EditUserFailAction
  | EditUserRequestAction
  | EditUserSuccessAction
  | SearchUsersFailAction
  | SearchUsersRequestAction
  | SearchUsersSuccessAction
  | FetchUserByIdFailAction
  | FetchUserByIdRequestAction
  | FetchUserByIdSuccessAction;
