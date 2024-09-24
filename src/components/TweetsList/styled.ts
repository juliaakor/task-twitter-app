import styled from 'styled-components';

import { TextOverflow } from '@/styles/mixins';

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
  width: inherit;

  ${({ theme }) => `
    padding: ${theme.spacing.small2X} ${theme.spacing.small4X};
  `};
`;

export const TweetText = styled.p`
  ${TextOverflow}
  width: inherit;

  ${({ theme }) => `
    font-size: ${theme.fontSize.medium};
  `};
`;

export const Content = styled.div`
  width: 90%;
  overflow: hidden;

  ${({ theme }) => `
    flex: ${theme.size.small};
    font-family: ${theme.fontFamily.primary};
    color: ${theme.colors.textPrimary};
  `}
`;
