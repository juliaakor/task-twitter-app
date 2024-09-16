import styled from 'styled-components';

export const Header = styled.h3`
  text-align: center;

  ${({ theme }) => `
    color: ${theme.colors.errorText};
    font-size: ${theme.fontSize.large2X};
    margin: ${theme.spacing.medium};
  `}
`;

export const Info = styled.p`
  text-align: center;

  ${({ theme }) => `
    font-size: ${theme.fontSize.medium};
    margin: ${theme.spacing.small};
  `}
`;

export const ButtonsContainer = styled.div`
  display: flex;

  ${({ theme }) => `
    margin-top: ${theme.spacing.small3X};
    gap: ${theme.spacing.large3X};
  `}
`;
