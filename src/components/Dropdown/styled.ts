import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: absolute;
  max-height: 30vh;
  overflow-y: auto;

  ${({ theme }) => `
    background: ${theme.colors.bgPopup};
    border-radius: ${theme.radius.small};
    box-shadow: ${theme.spacing.none}px ${theme.spacing.none}px ${theme.size.small3X}px ${theme.spacing.none}px ${theme.colors.borderGrayButton};
    padding: ${theme.spacing.small3X} ${theme.spacing.none};
  `}
`;

export const DropdownOptions = styled.ul`
  list-style-type: none;
`;

export const DropdownOption = styled.li`
  ${({ theme }) => `
    padding: ${theme.spacing.small3X} ${theme.spacing.mediumX};
    color: ${theme.colors.textPrimary};


    &:hover {
      background: ${theme.colors.bgButtonHover};
    }
  `}
`;
