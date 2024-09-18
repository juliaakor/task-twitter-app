import { KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { ItemContainer, NavItemIcon } from './styled';
import { NavItemProps } from './types';

export const NavItem = ({ isActive, item: { Icon, label, link }, onClick }: NavItemProps) => {
  const theme = useTheme();

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
        <NavItemIcon>
          <Icon isOutline={isActive} color={theme.colors.textPrimary} />
        </NavItemIcon>
        <span>{label}</span>
      </ItemContainer>
    </Link>
  );
};
