import { iconDefaults } from '../iconsDefaults';
import { IconProps } from '../types';

export const GifIcon = ({ color = iconDefaults.blackIconColor, size = 24 }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_6_419" maskUnits="userSpaceOnUse" x="0" y="0" width={size} height={size}>
        <rect width={size} height={size} fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_6_419)">
        <path
          d="M18.7499 10.48V8.78003H14.3499V15.18H16.0499V13.18H18.0499V11.48H16.0499V10.48H18.7499ZM11.4499 8.78003H13.1499V15.18H11.4499V8.78003ZM7.8499 10.38C8.2499 10.38 8.7499 10.58 9.0499 10.88L10.2499 9.88003C9.6499 9.18003 8.7499 8.78003 7.8499 8.78003C6.0499 8.78003 4.6499 10.18 4.6499 11.98C4.6499 13.78 6.0499 15.18 7.8499 15.18C8.8499 15.18 9.6499 14.78 10.2499 14.08V11.58H7.4499V12.78H8.6499V13.38C8.4499 13.48 8.1499 13.58 7.8499 13.58C6.9499 13.58 6.2499 12.88 6.2499 11.98C6.2499 11.18 6.9499 10.38 7.8499 10.38Z"
          fill={color}
        />
        <path
          d="M20.25 2H3.25C2.01 2 1 3.007 1 4.247V19.754C1 20.992 2.01 22 3.25 22H20.25C21.49 22 22.5 20.992 22.5 19.754V4.247C22.5 3.007 21.49 2 20.25 2ZM21 19.754C21 20.164 20.664 20.5 20.25 20.5H3.25C2.836 20.5 2.5 20.164 2.5 19.754V4.247C2.5 3.835 2.836 3.5 3.25 3.5H20.25C20.664 3.5 21 3.835 21 4.247V19.754Z"
          fill={color}
        />
      </g>
    </svg>
  );
};
