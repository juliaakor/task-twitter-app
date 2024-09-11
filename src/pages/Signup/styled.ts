import styled from 'styled-components';

import { media } from '@styles/breakpoints';
import { Link } from '@styles/mixins';

export const FormContainer = styled.div`
  margin: 5% auto;
  width: 45%;
  height: 130vh;

  ${media[768]`
    width: 70%;
  `};
`;

export const Image = styled.img`
  margin: auto;

  ${({ theme }) => `
    margin-bottom: ${theme.spacing.largeX};
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => `
    font-size: ${theme.fontSize.large2X};
    font-weight: ${theme.fontWeight.bold};
    line-height: ${theme.lineHeight.largeX};
    margin-bottom: ${theme.spacing.large2X};
  `}
`;

export const LinkItem = styled.div`
  ${Link}

  ${({ theme }) => `
    margin-top: ${theme.spacing.none};
  `}
`;

export const Selects = styled.div`
  ${({ theme }) => `
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    & > div:nth-child(1) {
    flex: ${theme.size.none} ${theme.size.none} ${theme.size.half};
    }
  `}
`;

export const SecondaryHeading = styled.h4`
  ${({ theme }) => `
    font-size: ${theme.fontSize.medium2X};
    font-weight: ${theme.fontWeight.bold};
    line-height: ${theme.lineHeight.medium};
    color: ${theme.colors.textPrimary};
  `}
`;

export const Info = styled.p`
  ${({ theme }) => `
    font-size: ${theme.fontSize.small};
    line-height: ${theme.lineHeight.medium2X};
    color: ${theme.colors.textInfo};
  `}
`;
