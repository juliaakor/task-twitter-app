import styled from 'styled-components';

import { media } from '@styles/breakpoints';

export const FormContainer = styled.div`
  margin: 5% auto;
  width: 40%;

  ${media[768]`
    width: 70%;
  `};
`;

export const Image = styled.img`
  ${({ theme }) => `
    margin-bottom: ${theme.spacing.largeX};
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => `
    font-size: ${theme.fontSize.largeX};
    font-weight: ${theme.fontWeight.extraBold};
    line-height: ${theme.lineHeight.large2X};
    margin-bottom: ${theme.spacing.largeX};
  `}
`;

export const LinkItem = styled.div`
  float: right;
`;
