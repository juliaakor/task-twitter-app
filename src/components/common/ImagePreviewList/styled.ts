import styled from 'styled-components';

export const ImagePreviewContainer = styled.div`
  display: flex;

  ${({ theme }) => `
    gap: ${theme.spacing.small};
    margin-top: ${theme.spacing.small};
  `}
`;

export const ImagePreview = styled.div`
  position: relative;
`;

export const Image = styled.img`
  object-fit: cover;

  ${({ theme }) => `
    width: ${theme.size.imagePreviewSmall};
    height: ${theme.size.imagePreviewSmall};
    border-radius: ${theme.radius.small};
  `}
`;

export const CloseButton = styled.button`
  position: absolute;
  border: none;
  cursor: pointer;

  ${({ theme }) => `
    top: ${theme.spacing.small4X};
    right: ${theme.spacing.small4X};
    background: ${theme.colors.borderButton};
    color: ${theme.colors.textButton};
    padding: ${theme.spacing.small4X} ${theme.spacing.small3X};
    font-size: ${theme.spacing.smallX};
    border-radius: ${theme.radius.small};
  `}
`;
