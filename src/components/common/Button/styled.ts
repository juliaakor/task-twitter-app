import styled, { css } from 'styled-components';

import { ButtonItemProps, ButtonType } from './types';

const brandStyle = css`
  ${({ theme }) => `
    background-color: ${theme.colors.hightlightBrand};
    color: ${theme.colors.textButton};
  `}
`;

const outlineStyle = css`
  ${({ theme }) => `
    background-color: ${theme.colors.transparent};
    color: ${theme.colors.textPrimary};
    border: 1px solid ${theme.colors.borderGrayButton};
  `}
`;

const blackStyle = css`
  ${({ theme }) => `
    background-color: ${theme.colors.bgButtonBlack};
    color: ${theme.colors.textButton};
    padding: ${theme.spacing.small2X} ${theme.spacing.mediumX};
  `}
`;

const disabledStyle = css`
  ${({ theme }) => `
    background-color: ${theme.colors.bgButtonDisabled};
    color: ${theme.colors.textButton};
    padding-top: ${theme.spacing.mediumX};
    padding-bottom: ${theme.spacing.medium};
  `}
`;

const buttonTypeStyles = {
  [ButtonType.Black]: blackStyle,
  [ButtonType.Brand]: brandStyle,
  [ButtonType.Disabled]: disabledStyle,
  [ButtonType.Outline]: outlineStyle,
};

export const ButtonItem = styled.button<ButtonItemProps>`
  border: none;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;

  ${({ theme }) => `
    width: ${theme.size.full};
    font-size: ${theme.fontSize.mediumX};
    font-weight: ${theme.fontWeight.bold};
    line-height: ${theme.lineHeight.mediumX};
    border-radius: ${theme.radius.button};
    padding: ${theme.spacing.mediumX};

    &:hover {
      box-shadow: ${theme.spacing.none}px ${theme.spacing.none}px ${theme.size.small3X}px ${theme.spacing.none}px
        ${theme.colors.borderButton};
    }

    &:disabled {
      background: ${theme.colors.bgButtonDisabled};
    }
  `}

  ${({ $type }) => buttonTypeStyles[$type] || ''}

  ${({ $type }) =>
    $type === ButtonType.Disabled &&
    `
    &:hover {
      box-shadow: none;
    }
  `}
`;
