import styled from 'styled-components';

export const SelectItem = styled.div`
  width: auto;
`;

export const SelectContainer = styled.div`
  width: max-content;
  height: max-content;

  ${({ theme }) => `
    padding: ${theme.spacing.none} ${theme.spacing.mediumX};
    border: ${theme.size.small}px solid ${theme.colors.borderGrayButton};
    border-radius: ${theme.radius.small};
  `}
`;

export const SelectOptions = styled.select`
  border: none;
  min-width: fit-content;

  ${({ theme }) => `
    padding: ${theme.spacing.medium2X} ${theme.spacing.mediumX};
    width: ${theme.size.full};
  `}
`;

export const SelectOption = styled.option`
  border: none;

  ${({ theme }) => `
    padding: ${theme.spacing.medium2X} ${theme.spacing.mediumX};
  `}
`;
