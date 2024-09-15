import styled from 'styled-components';

import { Link } from './mixins';

export interface ErrorMessageProps {
  $isVisible?: boolean;
}

export const ErrorMessage = styled.span<ErrorMessageProps>`
  ${({ $isVisible, theme }) => `
    color: ${theme.colors.errorText};
    font-size: ${theme.fontSize.smallX};
    line-height: ${theme.lineHeight.medium3X};
    padding: ${theme.spacing.small4X};
    opacity: ${$isVisible ? theme.size.small : theme.size.none}
  `}
`;

export enum LinkItemPosition {
  FloatLeft = 'float: left;',
  FloatRight = 'float: right',
}

export interface LinkItemProps {
  $positions?: LinkItemPosition[];
}

export const LinkItem = styled.span<LinkItemProps>`
  ${Link}

  font-size: inherit;

  ${({ $positions }) => `
    ${$positions}
  `}
`;

export const AvatarMedium = styled.img`
  ${({ theme }) => `
    width: ${theme.size.avatarMedium};
    height: ${theme.size.avatarMedium};
    border-radius: ${theme.radius.circle};
    margin-right: ${theme.spacing.medium};
  `}
`;

export const Username = styled.span`
  ${({ theme }) => `
    color: ${theme.colors.textInfo};
    font-size: ${theme.fontSize.smallX};
  `}
`;
