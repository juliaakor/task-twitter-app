import styled, { css } from 'styled-components';

import { media } from '@styles/breakpoints';

export const PageCountainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 90% 10%;

  ${({ theme }) => `
    grid-column-gap: ${theme.size.none}px;
    grid-row-gap: ${theme.size.none}px;
    min-height: ${theme.size.fullvh};
  `}

  ${media[1024]`
    grid-template-columns: 50% 50%;
  `}

  ${media[768]`
    grid-template-columns: 40% 60%;
  `}

  ${media[425]`
    grid-template-columns: 0% 100%;
  `}
`;

export const SwitchWrapper = styled.div`
  float: right;
  margin: ${({ theme }) => theme.spacing.small4X};
`;

export const Image = styled.img`
  object-fit: cover;
  display: inline-block;
  grid-area: 1 / 1 / 2 / 2;

  ${({ theme }) => `
    min-height: ${theme.size.full};
  `}
`;

export const GoogleIcon = styled.img`
  display: inline;
  vertical-align: middle;

  ${({ theme }) => `
    width: ${theme.size.icon};
    height: ${theme.size.icon};
    margin: ${theme.size.none} ${theme.spacing.small2X};
  `}
`;

export const ImageLogo = styled.img`
  cursor: pointer;

  ${({ theme }) => `
    margin-bottom: ${theme.spacing.large3X};
  `}

  ${media[425]`
    ${({ theme }) => `
      margin: ${theme.spacing.large3X} ${theme.spacing.none};
    `}
  `}
`;

export const LinkItem = styled.span`
  ${({ theme }) => `
    color: ${theme.colors.textLink};
    padding: ${theme.spacing.small4X};
  `}
`;

export const Heading = styled.h1`
  ${({ theme }) => `
    color: ${theme.colors.textPrimary};
    font-weight: ${theme.fontWeight.extraBold};
    font-size: ${theme.fontSize.large};
    line-height: ${theme.lineHeight.large3X};
    margin-bottom: ${theme.spacing.large3X};
  `}

  ${media[1024]`
    ${({ theme }) => `
      font-size: ${theme.fontSize.large4X};
    `}
  `}
`;

export const SecondaryHeading = styled.h4`
  ${({ theme }) => `
    color: ${theme.colors.textPrimary};
    font-weight: ${theme.fontWeight.extraBold};
    font-size: ${theme.fontSize.largeX};
    line-height: ${theme.lineHeight.large2X};
    margin-bottom: ${theme.spacing.medium4X};
  `}
`;

export const PageWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: ${({ theme }) => theme.spacing.large2X};
  align-self: center;
  grid-area: 1 / 2 / 2 / 3;
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => `
    width: ${theme.size.full};
    gap: ${theme.spacing.medium4X};
  `}
`;

const baseText = css`
  ${({ theme }) => `
    line-height: ${theme.lineHeight.medium};
    color: ${theme.colors.textPrimary};
  `}
`;

export const Info = styled.p`
  ${({ theme }) => `
    font-size: ${theme.fontSize.medium2X};
  `}

  ${baseText}
`;

export const SecondaryInfo = styled.p`
  ${({ theme }) => `
    font-size: ${theme.fontSize.smallX};
  `}

  ${baseText}
`;

export const FooterWrapper = styled.div`
  grid-area: 2 / 1 / 3 / 3;

  ${media[425]`
    ${({ theme }) => `
      padding-top: ${theme.spacing.medium2X};
    `}
  `}
`;
