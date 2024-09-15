import styled from 'styled-components';

import { media } from '@styles/breakpoints';

export const SidebarContainer = styled.div`
  ${({ theme }) => `
    padding: ${theme.spacing.medium};
    background-color: ${theme.colors.bgPrimary};
  `}

  ${media[768]`
    position: fixed;
    width: -webkit-fill-available;
    overflow: auto;
    text-align: center;
    z-index: 98;

    ${({ theme }) => `
      padding: ${theme.spacing.large5X} ${theme.spacing.medium};
      height: ${theme.size.fullvh};
    `}
  `}
`;

export const UserWrapper = styled.div`
  ${({ theme }) => `
    padding: ${theme.spacing.largeX} ${theme.spacing.medium};
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => `
    padding: ${theme.spacing.large4X} ${theme.spacing.none};
  `}
`;
