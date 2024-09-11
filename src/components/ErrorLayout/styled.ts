import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  margin: 20vh auto auto auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${({ theme }) => `
    gap: ${theme.spacing.mediumX};
    color: ${theme.colors.textPrimary};
  `}
`;

export const Heading = styled.h2`
  text-transform: uppercase;

  ${({ theme }) => `
    font-size: ${theme.fontSize.largeX};
    color: ${theme.colors.textPrimary};
  `}
`;

export const ErrorInfo = styled.p`
  ${({ theme }) => `
    color: ${theme.colors.hightlightCopyright};
  `}
`;

export const ButtonWrapper = styled.div`
  width: 30%;
`;
