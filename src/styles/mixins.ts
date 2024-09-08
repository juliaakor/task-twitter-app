import { css } from 'styled-components';

export const Link = css`
  ${({ theme }) => `
    margin-top: ${theme.spacing.large2X};
    color: ${theme.colors.textLink};
  `}
`;

export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
