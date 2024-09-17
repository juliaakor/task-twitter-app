import { UserWithoutPassword } from '@/types/models/User';
import { BaseAction } from '@store/types';
import { User } from '@type/models';

export interface UserState {
  userInfo: User | null;
  error: string | null;
  isLoading: boolean;
  users: User[];
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

  UPDATE_PASSWORD_FAIL: 'UPDATE_PASSWORD_FAIL',
  UPDATE_PASSWORD_REQUEST: 'UPDATE_PASSWORD_REQUEST',
  UPDATE_PASSWORD_SUCCESS: 'UPDATE_PASSWORD_SUCCESS',
};

export interface EditUserProps {
  id: string;
  userData: UserWithoutPassword;
}

export interface UpdatePasswordProps {
  id: string;
  currentPassword: string;
  newPassword: string;
}

interface EditUserFailAction extends BaseAction<typeof USER_ACTION_TYPES.EDIT_USER_FAIL, string> {}
interface EditUserRequestAction extends BaseAction<typeof USER_ACTION_TYPES.EDIT_USER_REQUEST, EditUserProps> {}
interface EditUserSuccessAction extends BaseAction<typeof USER_ACTION_TYPES.EDIT_USER_SUCCESS, User> {}

interface FetchUserByIdFailAction extends BaseAction<typeof USER_ACTION_TYPES.EDIT_USER_FAIL, string> {}
interface FetchUserByIdRequestAction extends BaseAction<typeof USER_ACTION_TYPES.EDIT_USER_REQUEST, string> {}
interface FetchUserByIdSuccessAction extends BaseAction<typeof USER_ACTION_TYPES.EDIT_USER_SUCCESS, User> {}

interface SearchUsersFailAction extends BaseAction<typeof USER_ACTION_TYPES.SEARCH_USERS_FAIL, string> {}
interface SearchUsersRequestAction extends BaseAction<typeof USER_ACTION_TYPES.SEARCH_USERS_REQUEST, string> {}
interface SearchUsersSuccessAction extends BaseAction<typeof USER_ACTION_TYPES.SEARCH_USERS_SUCCESS, User[]> {}

interface UpdatePasswordRequestAction
  extends BaseAction<typeof USER_ACTION_TYPES.UPDATE_PASSWORD_REQUEST, UpdatePasswordProps> {}
interface UpdatePasswordSuccessAction extends BaseAction<typeof USER_ACTION_TYPES.UPDATE_PASSWORD_SUCCESS, void> {}
interface UpdatePasswordFailAction extends BaseAction<typeof USER_ACTION_TYPES.UPDATE_PASSWORD_FAIL, string> {}

export type UserActionTypes =
  | EditUserFailAction
  | EditUserRequestAction
  | EditUserSuccessAction
  | SearchUsersFailAction
  | SearchUsersRequestAction
  | SearchUsersSuccessAction
  | FetchUserByIdFailAction
  | FetchUserByIdRequestAction
  | FetchUserByIdSuccessAction
  | UpdatePasswordFailAction
  | UpdatePasswordRequestAction
  | UpdatePasswordSuccessAction;
