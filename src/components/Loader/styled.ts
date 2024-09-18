import styled from 'styled-components';

import { FlexCenter } from '@styles/mixins';

export const LoaderWrapper = styled.div`
  ${FlexCenter}
  min-height: inherit;
  position: relative;

  ${({ theme }) => `
    width: ${theme.size.full};
    margin: ${theme.spacing.largeX} ${theme.size.none};
  `}
`;

const dotSize = '0.833rem';
const dotAnimationDuration = '0.6s';
const dotShift = '8px';
const thirdDotShift = '32px';
const forthDotShift = '56px';

export const LoaderContainer = styled.div`
  position: relative;
  left: -${forthDotShift};

  & div {
    ${({ theme }) => `
      border-radius: ${theme.size.half};
      background: ${theme.colors.hightlightBrand};
    `}

    box-sizing: border-box;
    position: absolute;
    width: ${dotSize};
    height: ${dotSize};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  & div:nth-child(1) {
    left: ${dotShift};
    animation: point1 ${dotAnimationDuration} infinite;
  }

  & div:nth-child(2) {
    left: ${dotShift};
    animation: point2 ${dotAnimationDuration} infinite;
  }

  & div:nth-child(3) {
    left: ${thirdDotShift};
    animation: point2 ${dotAnimationDuration} infinite;
  }

  & div:nth-child(4) {
    left: ${forthDotShift};
    animation: point3 ${dotAnimationDuration} infinite;
  }

  @keyframes point1 {
    ${({ theme }) => `
      0% {
        transform: scale(${theme.size.none});
      }
      100% {
        transform: scale(${theme.size.small});
      }
    `}
  }

  @keyframes point3 {
    ${({ theme }) => `
      0% {
        transform: scale(${theme.size.small});
      }
      100% {
        transform: scale(${theme.size.none});
      }
    `}
  }

  @keyframes point2 {
    ${({ theme }) => `
      0% {
        transform: translate(${theme.size.none}, ${theme.size.none});
      }
      100% {
        transform: translate(${theme.spacing.medium4X}, ${theme.size.none});
      }
    `}
  }
`;
