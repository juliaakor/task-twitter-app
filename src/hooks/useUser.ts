import { UserWithoutPassword } from '@/types/models/User';
import { useAppDispatch, useAppSelector } from '@store/index';
import { selectUserState } from '@store/user';
import {
  editUserRequest,
  fetchUserByIdRequest,
  searchUsersRequest,
  updatePasswordRequest,
} from '@store/user/userActions';

export const useUser = () => {
  const dispatch = useAppDispatch();
  const { error, isLoading, userInfo, users } = useAppSelector(selectUserState);

  const editUser = (id: string, userData: UserWithoutPassword) => {
    dispatch(editUserRequest(id, userData));
  };

  const getUserById = (id: string | undefined) => {
    if (!id) return;

    dispatch(fetchUserByIdRequest(id));
  };

  const searchUsers = (query: string) => {
    dispatch(searchUsersRequest(query));
  };

  const updatePassword = (id: string, currentPassword: string, newPassword: string) => {
    dispatch(updatePasswordRequest(id, currentPassword, newPassword));
  };

  return { editUser, error, getUserById, isLoading, searchUsers, updatePassword, userInfo, users };
};
