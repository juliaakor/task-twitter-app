import { iconDefaults } from '../iconsDefaults';
import { IconProps } from '../types';

export const CommentIcon = ({ color = iconDefaults.blackIconColor, size = 24 }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_6_429" maskUnits="userSpaceOnUse" x="0" y="0" width={size} height={size}>
        <rect width={size} height={size} fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_6_429)">
        <path
          d="M13.95 2.01L9.802 2H9.8C5.426 2 2 5.427 2 9.80201C2 13.9 5.186 17.008 9.465 17.172V21C9.465 21.108 9.509 21.286 9.585 21.403C9.727 21.628 9.96899 21.75 10.217 21.75C10.355 21.75 10.494 21.712 10.619 21.632C10.883 21.464 17.092 17.492 18.707 16.126C20.609 14.516 21.747 12.156 21.75 9.81401V9.79701C21.744 5.43 18.32 2.01 13.95 2.009V2.01ZM17.737 14.982C16.603 15.942 12.875 18.387 10.965 19.625V16.438C10.965 16.024 10.63 15.688 10.215 15.688H9.819C6.159 15.688 3.501 13.212 3.501 9.80201C3.501 6.268 6.269 3.5 9.801 3.5L13.948 3.51H13.95C17.482 3.51 20.25 6.276 20.252 9.80601C20.249 11.716 19.31 13.65 17.738 14.982H17.737Z"
          fill={color}
        />
      </g>
    </svg>
  );
};
