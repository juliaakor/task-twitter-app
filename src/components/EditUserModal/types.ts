import { User } from '@type/models/User';

export interface EditUserModalProps {
  isOpen: boolean;
  user: User;
  onClose: () => void;
}
