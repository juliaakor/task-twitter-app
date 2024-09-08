import styled from 'styled-components';

export const FormItem = styled.form`
  display: flex;
  flex-direction: column;

  ${({ theme }) => `
    gap: ${theme.spacing.medium2X};
    width: ${theme.size.full};
  `}
`;
