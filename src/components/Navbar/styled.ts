import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  width: auto;
`;

export const NavList = styled.ul`
  list-style: none;
  width: max-content;
  display: flex;
  flex-direction: column;

  ${({ theme }) => `
    gap:  ${theme.spacing.medium4X};
    margin-bottom:  ${theme.spacing.medium4X};
  `}
`;

export const LogoIcon = styled.img`
  ${({ theme }) => `
    margin-bottom:  ${theme.spacing.large4X};
  `}
`;
