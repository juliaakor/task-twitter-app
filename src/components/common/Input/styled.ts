import styled from 'styled-components';

export const InputItem = styled.input`
  outline: none;

  ${({ theme }) => `
    width: ${theme.size.full};
    border: 1px solid ${theme.colors.borderGrayButton};
    padding: ${theme.spacing.medium2X} ${theme.spacing.none} ${theme.spacing.mediumX} ${theme.spacing.mediumX};
    border-radius: ${theme.radius.small};

    &:focus {
      box-shadow: ${theme.spacing.none}px ${theme.spacing.none}px 7px -5px ${theme.colors.hightlightBrand};
    }
  `}
`;
