import { KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';

import { ItemContainer } from './styled';
import { NavItemProps } from './types';

export const NavItem = ({ isActive, item: { Icon, label, link }, onClick }: NavItemProps) => {
  const handleItemClick = () => {
    onClick?.({ Icon, label, link });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'Enter') return;

    handleItemClick();
  };

  return (
    <Link to={link}>
      <ItemContainer role="button" tabIndex={0} onKeyDown={handleKeyDown} onClick={handleItemClick}>
        <span>
          <Icon isOutline={isActive} />
        </span>
        <span>{label}</span>
      </ItemContainer>
    </Link>
  );
};
