import styled from 'styled-components';

export const ModalImage = styled.img`
  margin: auto;
  max-height: 80vh;
  aspect-ratio: 4 / 3;
  object-fit: contain;

  ${({ theme }) => `
    width: ${theme.size.full};
  `};
`;
