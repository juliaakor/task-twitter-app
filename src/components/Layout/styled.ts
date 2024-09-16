import styled from 'styled-components';

import { media } from '@styles/breakpoints';

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr 20%;
  margin: auto;
  width: 90%;

  ${({ theme }) => `
    background-color: ${theme.colors.bgPrimary};
    gap: ${theme.spacing.large};
    min-height: ${theme.size.fullvh};
  `}

  ${media[768]`
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
  `}
`;

export const MenuIconWrapper = styled.div`
  z-index: 99;

  ${({ theme }) => `
      padding: ${theme.spacing.medium};
  `}
`;

export const MiddleSection = styled.main`
  overflow-y: auto;

  ${({ theme }) => `
    padding: ${theme.spacing.medium};
    background: ${theme.colors.bgPrimary};
  `}
`;
