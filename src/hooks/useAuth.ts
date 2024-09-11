import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@constants/routes';
import { signOutSuccess } from '@store/auth/authActions';
import { selectAuthState, selectUser } from '@store/auth/authSelectors';
import { useAppDispatch, useAppSelector } from '@store/index';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, isLoading } = useAppSelector(selectAuthState);
  const user = useAppSelector(selectUser);

  const handleSignOut = () => {
    dispatch(signOutSuccess());
    navigate(ROUTES.HOME);
  };

  return { handleSignOut, isAuthenticated, isLoading, user };
};
