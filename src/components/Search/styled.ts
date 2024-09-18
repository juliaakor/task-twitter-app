import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: none;

  ${({ theme }) => `
    padding: ${theme.spacing.none} ${theme.spacing.mediumX};
    width: ${theme.size.full};
    border-radius: ${theme.radius.search};
    background-color: ${theme.colors.bgSearch};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => `
    width: ${theme.size.full};
    padding: ${theme.spacing.medium};
    border-radius: ${theme.radius.small};
    border: ${theme.size.small} solid ${theme.colors.borderInput};
    font-family: ${theme.fontFamily.primary};
    font-size: ${theme.fontSize.medium2X};
    color: ${theme.colors.textPrimary};
    background: ${theme.colors.transparent};
    border: ${theme.size.none};
  `}
`;

export const SearchIconContainer = styled.div`
  ${({ theme }) => `
    color: ${theme.colors.iconDefault};
    font-size: ${theme.fontSize.mediumX};
    margin-right: ${theme.spacing.small3X};
  `}
`;

export const SearchItem = styled.div`
  width: 18rem;
`;
