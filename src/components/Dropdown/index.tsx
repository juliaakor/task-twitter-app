import { Link } from 'react-router-dom';

import { DropdownContainer, DropdownOptions, DropdownOption } from './styled';
import { DropdownProps } from './types';

export const Dropdown = ({ isOpen, options }: DropdownProps) => {
  if (!isOpen) return null;

  return (
    <DropdownContainer>
      <DropdownOptions>
        {options.map(({ label, link, onClick }) => (
          <Link to={link || ''} key={label} onClick={onClick}>
            <DropdownOption>{label}</DropdownOption>
          </Link>
        ))}
      </DropdownOptions>
    </DropdownContainer>
  );
};
