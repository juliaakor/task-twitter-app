import { iconDefaults } from '../iconsDefaults';
import { IconProps } from '../types';

export const StatisticsIcon = ({ color = iconDefaults.grayIconColor, size = 24 }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_6_374" maskUnits="userSpaceOnUse" x="0" y="0" width={size} height={size}>
        <rect width={size} height={size} fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_6_374)">
        <path d="M6 11H8V22H6V11Z" fill={color} />
        <path d="M11 2H13V22H11V2Z" fill={color} />
        <path d="M16 8H18V22H16V8Z" fill={color} />
      </g>
    </svg>
  );
};
