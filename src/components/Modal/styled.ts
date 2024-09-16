import styled from 'styled-components';

import { FlexCenter } from '@styles/mixins';

export const ModalOverlay = styled.div`
  ${FlexCenter}
  position: fixed;
  background: transparent;
  z-index: 1000;
  pointer-events: none;

  ${({ theme }) => `
    top: ${theme.size.none};
    left: ${theme.size.none};
    width: ${theme.size.fullvw};
    height: ${theme.size.fullvh};
  `}
`;

export const ModalContent = styled.div`
  width: 50vw;
  min-height: 10vh;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  pointer-events: auto;
  margin: auto;

  ${({ theme }) => `
    font-family: ${theme.fontFamily.primary};
    font-size: ${theme.fontSize.medium};
    color: ${theme.colors.textPrimary};
    padding: ${theme.spacing.medium4X};
    background: ${theme.colors.bgPopup};
    border-radius: ${theme.radius.small};
    box-shadow: ${theme.spacing.none}px ${theme.spacing.none}px ${theme.size.small3X}px ${theme.spacing.none}px ${theme.colors.borderGrayButton};

  `}
`;

export const CloseButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;

  ${({ theme }) => `
    top: ${theme.spacing.small4X};
    right: ${theme.spacing.smallX};
    font-size: ${theme.fontSize.mediumX};
    color: ${theme.colors.textPrimary};
  `}
`;
