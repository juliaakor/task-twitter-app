import styled, { DefaultTheme } from 'styled-components';

import { GalleryItemProps } from './types';

const GRID_PREVIEW_COLUMNS = 3;
const GRID_PREVIEW_ROWS = 2;

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${GRID_PREVIEW_COLUMNS}, 1fr);
  grid-template-rows: repeat(${GRID_PREVIEW_ROWS}, auto);

  ${({ theme }) => `
    grid-gap: ${theme.size.smallX}px;
    width: ${theme.size.full};
    max-width: ${theme.size.maxImagePreview};
    margin: ${theme.spacing.small2X} auto;
  `}
`;

const getBorderRadius = ($position: number, theme: DefaultTheme) => {
  const radius = theme.radius.medium;

  let topLeft = 0;
  let topRight = 0;
  let bottomRight = 0;
  let bottomLeft = 0;

  switch ($position) {
    case 0:
      topLeft = radius;
      break;
    case 2:
      topRight = radius;
      break;
    case 3:
      bottomLeft = radius;
      break;
    case 5:
      bottomRight = radius;
      break;
    default:
      break;
  }

  return `border-radius: ${topLeft} ${topRight} ${bottomRight} ${bottomLeft};`;
};

export const GalleryItem = styled.div<GalleryItemProps>`
  position: relative;
  overflow: hidden;

  ${({ theme }) => `
    width: ${theme.size.full};
    height: ${theme.size.imagesPreview};
  `}

  ${({ $position, theme }) => getBorderRadius($position, theme)}
`;

export const GalleryImage = styled.img`
  object-fit: cover;

  ${({ theme }) => `
    width: ${theme.size.full};
    height: ${theme.size.full};
  `}
`;
