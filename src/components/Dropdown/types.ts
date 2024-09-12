export interface DropdownOption {
  label: string;
  link?: string;
  onClick?: () => void;
}

export interface DropdownProps {
  options: DropdownOption[];
  isOpen: boolean;
}
