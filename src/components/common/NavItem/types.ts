import { NavItem } from '@constants/routes';

export interface NavItemProps {
  isActive: boolean;
  item: NavItem;
  onClick?: (item: NavItem) => void;
}
