import styled from 'styled-components';

export const UserPreviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => `
    width: ${theme.size.userPreviewSmall};
    padding: ${theme.spacing.small} ${theme.spacing.none};
  `}
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
`;

export const NameHandleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  overflow-x: hidden;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 50%;
`;

export const Name = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;
