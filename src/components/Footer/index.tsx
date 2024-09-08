import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import { Dropdown } from '@components/Dropdown';
import { DropdownOption } from '@components/Dropdown/types';
import { OutsideClickProvider } from '@components/OutsideClickProvider';
import { FOOTER_ROUTES, SHORT_FOOTER_VIEW } from '@constants/routes';

import { Copyright, FooterContainer, FooterItem } from './styled';
import { FooterOptionButton, FooterProps } from './types';

const FooterOption = (isFullView: boolean, { label, link }: DropdownOption) => {
  return (
    <Link to={link || ''}>
      <FooterItem $isFullView={isFullView}>{label}</FooterItem>
    </Link>
  );
};

const FooterOptionsButton = ({ label, options }: FooterOptionButton) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOutsideDropdownClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <FooterItem onClick={handleModalToggle}>{label}</FooterItem>
      <OutsideClickProvider onOutsideClick={handleOutsideDropdownClick}>
        <Dropdown isOpen={isOpen} options={options} />
      </OutsideClickProvider>
    </div>
  );
};

export const Footer = ({ isFullView = true }: FooterProps) => {
  return (
    <FooterContainer $isFullView={isFullView}>
      {isFullView
        ? FOOTER_ROUTES.map(({ label, link }) => FooterOption(isFullView, { label, link }))
        : SHORT_FOOTER_VIEW.map(({ label, link, options }) => (
            <Fragment key={label}>
              {link !== null && FooterOption(isFullView, { label, link })}
              {options ? FooterOptionsButton({ label, options }) : null}
            </Fragment>
          ))}
      <Copyright>© 2021 Twitter, Inc.</Copyright>
    </FooterContainer>
  );
};
