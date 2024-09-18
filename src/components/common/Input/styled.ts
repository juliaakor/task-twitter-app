import styled from 'styled-components';

export const InputItem = styled.input`
  outline: none;

  ${({ theme }) => `
    width: ${theme.size.full};
    border: 1px solid ${theme.colors.borderGrayButton};
    padding: ${theme.spacing.medium2X} ${theme.spacing.none} ${theme.spacing.mediumX} ${theme.spacing.mediumX};
    border-radius: ${theme.radius.small};
    color: ${theme.colors.textPrimary};
    background: ${theme.colors.bgPrimary};

    &:focus {
      box-shadow: ${theme.spacing.none}px ${theme.spacing.none}px 7px 0px ${theme.colors.hightlightBrand};
      background: ${theme.colors.bgPrimary};
    }
  `}
`;
