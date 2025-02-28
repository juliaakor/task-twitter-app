import { iconDefaults } from '../iconsDefaults';
import { IconProps } from '../types';

export const ImageIcon = ({ color = iconDefaults.blackIconColor, size = 24 }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_6_416" maskUnits="userSpaceOnUse" x="0" y="0" width={size} height={size}>
        <rect width={size} height={size} fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_6_416)">
        <path
          d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25V19.75C2 20.99 3.01 22 4.25 22H19.75C20.99 22 22 20.99 22 19.75V4.25C22 3.01 20.99 2 19.75 2ZM4.25 3.5H19.75C20.163 3.5 20.5 3.837 20.5 4.25V13.926L16.642 10.068C16.502 9.928 16.312 9.848 16.112 9.848H16.109C15.909 9.848 15.716 9.928 15.577 10.072L11.26 14.456L9.44701 12.65C9.30701 12.51 9.11701 12.43 8.91701 12.43C8.72401 12.4 8.522 12.51 8.382 12.657L3.5 17.642V4.25C3.5 3.837 3.837 3.5 4.25 3.5ZM3.506 19.78L8.924 14.246L15.206 20.5H4.25C3.848 20.5 3.523 20.178 3.506 19.78ZM19.75 20.5H17.33L12.323 15.513L16.115 11.663L20.5 16.047V19.75C20.5 20.163 20.163 20.5 19.75 20.5Z"
          fill={color}
        />
        <path
          d="M8.86816 9.85097C9.72016 9.85097 10.4102 9.16067 10.4102 8.30897C10.4102 7.45737 9.72016 6.76697 8.86816 6.76697C8.01616 6.76697 7.32617 7.45737 7.32617 8.30897C7.32617 9.16067 8.01616 9.85097 8.86816 9.85097Z"
          fill={color}
        />
      </g>
    </svg>
  );
};
