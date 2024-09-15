import { RootState } from '@store/index';

import { UserState } from './types';

export const selectUserState = (state: RootState): UserState => state.user;

export const selectUserInfo = (state: RootState): UserState['userInfo'] => selectUserState(state).userInfo;

export const selectIsLoading = (state: RootState): UserState['isLoading'] => selectUserState(state).isLoading;

export const selectError = (state: RootState): UserState['error'] => selectUserState(state).error;
