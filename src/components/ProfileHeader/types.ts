import { User } from '@type/models';

export interface ProfileProps extends Partial<User> {
  isAuthUser?: boolean;
  onEditProfile: () => void;
}
