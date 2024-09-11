import styled, { css } from 'styled-components';

import { FlexCenter } from '@styles/mixins';

import { FooterContainerProps } from './types';

export const FooterContainer = styled.ul<FooterContainerProps>`
  ${FlexCenter}
  flex-wrap: wrap;
  list-style-type: none;

  ${({ $isFullView, theme }) => `
    width: ${theme.size.full};
    height: ${$isFullView ? theme.size.footerHeight : 'max-content'};
    gap: ${theme.spacing.smallX} ${theme.spacing.medium};
  `}
`;

const Item = css`
  ${({ theme }) => `
    font-size: ${theme.fontSize.small2X};
    line-height: ${theme.lineHeight.small};
  `}
`;

export const FooterItem = styled.li<FooterContainerProps>`
  ${Item}

  ${({ $isFullView, theme }) => `
    color: ${$isFullView ? theme.colors.textPrimary : theme.colors.hightlightCopyright};

    &:hover {
      color: ${$isFullView ? theme.colors.textLink : theme.colors.hightlightCopyright};
      text-decoration: ${$isFullView ? 'none' : 'underline'};
    }
  `}
`;

export const Copyright = styled.span`
  ${Item}

  color: ${({ theme }) => theme.colors.textPrimary};
`;
