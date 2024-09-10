import { User } from '@/types/models/User';
import { RootState } from '@store/index';

export const selectAuthState = (state: RootState) => state.auth;

export const selectIsAuthenticated = (state: RootState): boolean => selectAuthState(state).isAuthenticated;

export const selectUser = (state: RootState) => selectAuthState(state).user as User;

export const selectLoading = (state: RootState): boolean => selectAuthState(state).isLoading;
