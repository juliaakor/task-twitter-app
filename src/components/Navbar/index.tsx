import { useState } from 'react';

import logoIcon from '@assets/images/twitterLogo.png';
import { Button, NavItem } from '@components/common';
import { ButtonType } from '@components/common/Button/types';
import { Modal } from '@components/Modal';
import { TweetInput } from '@components/TweetInput';
import { NAV_ROUTES } from '@constants/routes';
import { useAuth, useModal } from '@hooks/index';

import { LogoIcon, NavbarContainer, NavList } from './styled';

export const Navbar = () => {
  const { user } = useAuth();
  const { closeModal, isModalOpen, openModal } = useModal();

  const [activeRoute, setActiveRoute] = useState(NAV_ROUTES[0]);

  const handleCreateTweet = () => {};

  return (
    <NavbarContainer>
      <LogoIcon src={logoIcon} />
      <NavList>
        {NAV_ROUTES.map(({ Icon, label, link }) => (
          <NavItem
            key={label}
            isActive={activeRoute.label === label}
            item={{ Icon, label, link: label === 'Profile' ? `/profile/${user.id}` : link }}
            onClick={setActiveRoute}
          />
        ))}
      </NavList>
      <Button onClick={openModal} type="button" label="Tweet" name="Tweet" styleType={ButtonType.Brand} />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <TweetInput onTweet={handleCreateTweet} />
      </Modal>
    </NavbarContainer>
  );
};
