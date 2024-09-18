import styled from 'styled-components';

import { FlexCenter } from '@styles/mixins';

export const ItemContainer = styled.li`
  ${FlexCenter}
  justify-content: flex-start;
  cursor: pointer;

  ${({ theme }) => `
    gap:  ${theme.spacing.mediumX};
    color: ${theme.colors.textPrimary};
    font-weight: ${theme.fontWeight.semiBold};
    font-size: ${theme.fontSize.medium2X};
    line-height: ${theme.lineHeight.medium};
    padding-right:  ${theme.spacing.large5X};
  `};
`;

export const NavItemIcon = styled.span`
  ${({ theme }) => `
    width: ${theme.size.iconLarge};
  `};
`;
