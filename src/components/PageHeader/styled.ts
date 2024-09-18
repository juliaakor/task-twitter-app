import styled from 'styled-components';

import { FlexCenter } from '@styles/mixins';

export const HeaderContainer = styled.div`
  ${FlexCenter}
  justify-content: space-between;

  ${({ theme }) => `
    border: ${theme.size.small}px solid ${theme.colors.borderGrayButton};
    padding: ${theme.spacing.mediumX} ${theme.spacing.medium4X};
  `}
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h5`
  ${({ theme }) => `
    font-weight: ${theme.fontWeight.bold};
  `}
`;

export const SubTitle = styled.h6`
  text-align: left;

  ${({ theme }) => `
    font-weight: ${theme.fontWeight.regular};
    font-size: ${theme.spacing.medium};
    line-height: ${theme.lineHeight.smallX};
    color: ${theme.colors.textInfo};
  `}
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  float: left;
`;

export const HeaderInfo = styled.div`
  display: flex;
  text-align: left;

  ${({ theme }) => `
    font-weight: ${theme.fontWeight.regular};
    font-size: ${theme.spacing.mediumX};
    line-height: ${theme.lineHeight.mediumX};
    gap: ${theme.size.small2X};
  `}
`;
