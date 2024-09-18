import styled from 'styled-components';

export const SuggestionsContainer = styled.div`
  width: fit-content;

  ${({ theme }) => `
    background: ${theme.colors.bgPopup};
    margin: ${theme.spacing.medium} ${theme.spacing.none};
    border-radius: ${theme.radius.medium};
    padding: ${theme.spacing.medium};
  `}
`;

export const SuggestionsHeader = styled.div`
  ${({ theme }) => `
    font-weight: ${theme.fontWeight.bold};
    margin-bottom: ${theme.spacing.medium};
    font-family: ${theme.fontFamily.secondary};
    font-size: ${theme.fontSize.large3X};
    line-height: ${theme.lineHeight.large};
  `}
`;

export const UsersContainer = styled.div`
  max-height: 50vh;
  overflow-y: auto;
`;
