import styled from 'styled-components';

export const RightSidebarContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => `
    padding: ${theme.spacing.medium};
  `};
`;
