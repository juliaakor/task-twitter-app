import { iconDefaults } from '../iconsDefaults';
import { IconProps } from '../types';

export const SmileIcon = ({ color = iconDefaults.blackIconColor, size = 24 }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_6_425" maskUnits="userSpaceOnUse" x="0" y="0" width={size} height={size}>
        <rect width={size} height={size} fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_6_425)">
        <path
          d="M11.75 22.5C5.822 22.5 1 17.678 1 11.75C1 5.822 5.822 1 11.75 1C17.678 1 22.5 5.822 22.5 11.75C22.5 17.678 17.678 22.5 11.75 22.5ZM11.75 2.5C6.65 2.5 2.5 6.65 2.5 11.75C2.5 16.85 6.65 21 11.75 21C16.85 21 21 16.85 21 11.75C21 6.65 16.85 2.5 11.75 2.5Z"
          fill={color}
        />
        <path
          d="M11.7502 16.8651C9.85824 16.8651 8.11725 15.9151 7.09425 14.3211C6.87025 13.9731 6.97125 13.5111 7.32025 13.2861C7.66825 13.0601 8.13225 13.1621 8.35625 13.5121C9.10325 14.6741 10.3722 15.3671 11.7512 15.3671C13.1302 15.3671 14.3992 14.6741 15.1472 13.5131C15.3712 13.1631 15.8352 13.0631 16.1832 13.2881C16.5332 13.5121 16.6332 13.9761 16.4092 14.3241C15.3842 15.9181 13.6432 16.8691 11.7512 16.8691L11.7502 16.8651Z"
          fill={color}
        />
        <path
          d="M14.4878 10.686C15.3041 10.686 15.9658 10.0243 15.9658 9.20798C15.9658 8.39168 15.3041 7.72998 14.4878 7.72998C13.6715 7.72998 13.0098 8.39168 13.0098 9.20798C13.0098 10.0243 13.6715 10.686 14.4878 10.686Z"
          fill={color}
        />
        <path
          d="M9.01218 10.686C9.82848 10.686 10.4902 10.0243 10.4902 9.20798C10.4902 8.39168 9.82848 7.72998 9.01218 7.72998C8.1959 7.72998 7.53418 8.39168 7.53418 9.20798C7.53418 10.0243 8.1959 10.686 9.01218 10.686Z"
          fill={color}
        />
      </g>
    </svg>
  );
};
