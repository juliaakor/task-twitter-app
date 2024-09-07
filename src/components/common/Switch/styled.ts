import styled from 'styled-components';

import { CircleProps } from './types';

const lineWeight = '2px';
const circleSize = '1.875rem';
const transitionDurationTiming = '0.3s ease';

export const ThemeSwitcher = styled.div`
  width: calc(${circleSize} * 2);
  height: ${circleSize};
  cursor: pointer;
  transition: background-color ${transitionDurationTiming};
`;

export const SwitchItem = styled.div`
  ${({ theme }) => `
    width: ${theme.size.full};
    height: ${theme.size.full};
    border: ${lineWeight} solid ${theme.colors.borderGrayButton};
    border-radius: ${theme.radius.switch};
    background: ${theme.colors.transparent};
  `};

  position: relative;
  transition: background-color ${transitionDurationTiming};
`;

export const Circle = styled.div<CircleProps>`
  ${({ $isOn, theme }) => `
    border: ${lineWeight} solid ${theme.colors.borderGrayButton};
    background: ${theme.colors.transparent};
    border-radius: ${theme.radius.circle};
    top: ${theme.radius.circle};
    transform: translateY(-${theme.radius.circle});
    left: ${$isOn ? `-${theme.size.small}px` : `calc(${circleSize} - 0.175rem)`};
  `};

  width: ${circleSize};
  height: ${circleSize};
  position: absolute;
  transition: left ${transitionDurationTiming};
`;
