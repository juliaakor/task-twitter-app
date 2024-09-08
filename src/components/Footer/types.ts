import { DropdownOption } from '@components/Dropdown/types';

export interface FooterProps {
  isFullView: boolean;
}

export interface FooterOptionButton {
  label: string;
  options: DropdownOption[];
}

export interface FooterContainerProps {
  $isFullView?: boolean;
}
