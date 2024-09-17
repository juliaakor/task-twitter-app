import styled from 'styled-components';

export const RightSidebarContainer = styled.div`
  width: auto;

  ${({ theme }) => `
    padding: ${theme.spacing.medium};
  `};
`;
