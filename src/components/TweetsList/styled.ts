import styled from 'styled-components';

export const TweetsListContainer = styled.div`
  position: absolute;
  max-height: 60vh;
  overflow-y: auto;
  z-index: 99;

  ${({ theme }) => `
    width: ${theme.size.userPreviewSmall};
    background: ${theme.colors.bgPrimary};
    padding: ${theme.spacing.smallX};
  `}
`;

export const TweetContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${({ theme }) => `
    padding: ${theme.spacing.small2X} ${theme.spacing.small4X};
  `};
`;
