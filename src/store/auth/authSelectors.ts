import { RootState } from '@store/index';
import { User } from '@type/models/User';

export const selectAuthState = (state: RootState) => state.auth;

export const selectIsAuthenticated = (state: RootState): boolean => selectAuthState(state).isAuthenticated;

export const selectUser = (state: RootState) => selectAuthState(state).user as User;

export const selectLoading = (state: RootState): boolean => selectAuthState(state).isLoading;
