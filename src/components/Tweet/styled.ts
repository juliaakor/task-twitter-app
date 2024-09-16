import styled from 'styled-components';

import { FlexCenter } from '@styles/mixins';

import { TweetImagesContainerProps } from './types';

export const TweetImagesContainer = styled.div<TweetImagesContainerProps>`
  display: grid;

  ${({ $imageCount }) => {
    if ($imageCount === 1) {
      return `
        grid-template-columns: 1fr;
      `;
    }
    if ($imageCount === 2) {
      return `
        grid-template-columns: repeat(2, 1fr);
      `;
    }
    if ($imageCount === 3) {
      return `
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, auto);
        & img:nth-child(1) {
          grid-column: span 2;
        }
      `;
    }
    if ($imageCount === 4) {
      return `
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
      `;
    }

    return '';
  }}

  ${({ theme }) => `
    grid-gap: ${theme.spacing.small4X};
    margin-top: ${theme.spacing.small3X};
  `}
`;

export const TweetImage = styled.img`
  object-fit: cover;

  ${({ theme }) => `
    width: ${theme.size.full};
    height: ${theme.size.imagePreviewMedium};
    border-radius: ${theme.radius.medium};
  `}
`;

export const DropdownIconWrapper = styled.div`
  float: right;
`;

export const TweetContainer = styled.div`
  display: flex;

  ${({ theme }) => `
    border-bottom: ${theme.size.small}px solid ${theme.colors.borderGrayButton};
    padding: ${theme.spacing.medium};
  `}
`;

export const Content = styled.div`
  width: 90%;

  ${({ theme }) => `
    flex: ${theme.size.small};
    font-family: ${theme.fontFamily.primary};
    color: ${theme.colors.textPrimary};
  `}
`;

export const Name = styled.span`
  text-align: left;

  ${({ theme }) => `
    margin-right: ${theme.spacing.smallX};
    font-family: ${theme.fontFamily.secondary};
    font-size: ${theme.fontSize.medium2X};
    font-weight: ${theme.fontWeight.medium};
    line-height: ${theme.lineHeight.mediumX};
  `}
`;

export const Timestamp = styled.span`
  ${({ theme }) => `
    color: ${theme.colors.textInfo};
    font-size: ${theme.fontSize.smallX};
    margin: ${theme.spacing.none} ${theme.spacing.smallX};
  `}
`;

export const TweetText = styled.p`
  ${({ theme }) => `
    font-size: ${theme.fontSize.medium};
  `}
`;

export const LikeContainer = styled.div`
  ${FlexCenter}
  float: left;

  ${({ theme }) => `
    gap: ${theme.spacing.small4X};
    font-size: ${theme.fontSize.small};

    & svg {
      width: ${theme.size.icon};
    }
  `}
`;

export const ModalImage = styled.img`
  margin: auto;
  max-height: 80vh;
  aspect-ratio: 4 / 3;
  object-fit: contain;

  ${({ theme }) => `
    width: ${theme.size.full};
  `};
`;
