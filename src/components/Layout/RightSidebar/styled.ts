import styled from 'styled-components';

export const RightSidebarContainer = styled.div`
  width: fit-content;

  ${({ theme }) => `
    padding: ${theme.spacing.medium};
  `};
`;
