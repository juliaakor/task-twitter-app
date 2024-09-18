import { useLocation, useNavigate } from 'react-router-dom';

import logoIcon from '@assets/images/twitterLogo.png';
import { Button, NavItem } from '@components/common';
import { ButtonType } from '@components/common/Button/types';
import { Modal } from '@components/Modal';
import { TweetInput } from '@components/TweetInput';
import { NAV_ROUTES, ROUTES } from '@constants/routes';
import { useAuth, useModal } from '@hooks/index';

import { LogoIcon, NavbarContainer, NavList } from './styled';

export const Navbar = () => {
  const { user } = useAuth();
  const { closeModal, isModalOpen, openModal } = useModal();

  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate(ROUTES.HOME);
  };

  const location = useLocation();

  const getLink = (label: string, link: string) => (label === 'Profile' ? `/profile/${user?.id}` : link);

  const isRouteActive = (label: string, link: string) => {
    const actualLink = getLink(label, link);

    return actualLink === '/' ? location.pathname === actualLink : location.pathname.startsWith(actualLink);
  };

  return (
    <NavbarContainer>
      <LogoIcon src={logoIcon} onClick={handleNavigateHome} />
      <NavList>
        {NAV_ROUTES.map(({ Icon, label, link }) => (
          <NavItem
            key={label}
            isActive={isRouteActive(label, link)}
            item={{ Icon, label, link: getLink(label, link) }}
          />
        ))}
      </NavList>
      <Button onClick={openModal} type="button" label="Tweet" name="Tweet" styleType={ButtonType.Brand} />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <TweetInput />
      </Modal>
    </NavbarContainer>
  );
};
