import { KeyboardEvent } from 'react';

import { BurgerMenuIcon } from '@assets/icons/burgerMenuIcon';
import { LeftSidebar } from '@components/Layout/LeftSidebar';
import { RightSidebar } from '@components/Layout/RightSidebar';
import { useToggleMenu } from '@hooks/index';

import { LayoutContainer, MenuIconWrapper, MiddleSection } from './styled';
import { LayoutProps } from './types';

export const Layout = ({ children }: LayoutProps) => {
  const { isMenuOpen, isMobile, toggleMenu } = useToggleMenu();

  const handleToggleMenu = () => {
    toggleMenu();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'Enter') return;

    handleToggleMenu();
  };

  return (
    <LayoutContainer>
      {isMobile && (
        <MenuIconWrapper
          aria-label="Menu Icon"
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onClick={handleToggleMenu}
        >
          <BurgerMenuIcon />
        </MenuIconWrapper>
      )}
      {(!isMobile || isMenuOpen) && <LeftSidebar />}
      <MiddleSection>{children}</MiddleSection>
      <RightSidebar />
    </LayoutContainer>
  );
};
