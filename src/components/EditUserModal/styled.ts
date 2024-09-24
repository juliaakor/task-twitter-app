import styled from 'styled-components';

import { TextOverflow } from '@/styles/mixins';

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => `
    padding: ${theme.spacing.mediumX};
    width: ${theme.size.full};
    gap: ${theme.spacing.medium};
  `}
`;

export const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileLabel = styled.label`
  display: inline-block;
  cursor: pointer;
  text-align: center;

  ${({ theme }) => `
    padding: ${theme.spacing.medium};
    border: ${theme.size.small}px solid ${theme.colors.hightlightBrand};
    border-radius: ${theme.radius.switch};
    background-color: ${theme.colors.transparent};
    color: ${theme.colors.hightlightBrand};
    font-size: ${theme.fontSize.smallX};

    &:hover {
      border-color: ${theme.colors.borderGrayButton};
    }
  `}
`;

export const FileName = styled.span`
  ${TextOverflow}

  ${({ theme }) => `
    font-size: ${theme.fontSize.smallX};
    color: ${theme.colors.textPrimary};
    padding: ${theme.spacing.small};
  `}
`;

export const Heading = styled.h4`
  ${({ theme }) => `
    margin: ${theme.spacing.medium2X} ${theme.spacing.none};
  `}
`;
