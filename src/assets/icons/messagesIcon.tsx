import { iconDefaults } from '../iconsDefaults';
import { IconProps } from '../types';

export const MessagesIcon = ({
  color = iconDefaults.blackIconColor,
  height = 25,
  isOutline = false,
  width = 24,
}: IconProps) => {
  return isOutline ? (
    <svg width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_6_392" maskUnits="userSpaceOnUse" x="0" y="0" width={width} height={height}>
        <rect y="0.768066" width={width} height={height} fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_6_392)">
        <path
          d="M19.25 3.76807H4.75C3.233 3.76807 2 5.00207 2 6.52007V19.0151C2 20.5331 3.233 21.7681 4.75 21.7681H19.25C20.767 21.7681 22 20.5331 22 19.0151V6.52007C22 5.00207 20.767 3.76807 19.25 3.76807ZM4.75 5.26807H19.25C19.94 5.26807 20.5 5.82807 20.5 6.51807V7.23206L12.45 12.5991C12.177 12.7791 11.824 12.7811 11.55 12.5971L3.5 7.23206V6.51807C3.5 5.82807 4.06 5.26807 4.75 5.26807ZM19.25 20.2661H4.75C4.06 20.2661 3.5 19.7061 3.5 19.0161V8.99007L10.74 13.8201C11.123 14.0761 11.562 14.2041 12 14.2041C12.44 14.2041 12.877 14.0761 13.26 13.8211L20.5 8.99106V19.0131C20.5 19.7031 19.94 20.2631 19.25 20.2631V20.2661Z"
          fill={color}
        />
      </g>
    </svg>
  ) : (
    <svg width={width} height={height} viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_320_7)">
        <path
          d="M9.55 13.8501C9.823 14.0321 10.177 14.0321 10.45 13.8501L20 7.48407V7.26807C20 6.02807 18.99 5.01807 17.75 5.01807H2.25C1.01 5.01807 0 6.02807 0 7.26807V7.46507L9.55 13.8501Z"
          fill={color}
        />
      </g>
      <g clipPath="url(#clip1_320_7)">
        <path
          d="M11.26 15.5631C10.877 15.8181 10.44 15.9451 10 15.9451C9.56 15.9451 9.12301 15.8181 8.74001 15.5621L0 9.72009V21.3901C0 22.6301 1.01 23.6401 2.25 23.6401H17.75C18.99 23.6401 20 22.6301 20 21.3901V9.7381L11.26 15.5611V15.5631Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_7">
          <rect width="20" height="9" fill="white" transform="translate(0 5)" />
        </clipPath>
        <clipPath id="clip1_320_7">
          <rect width="20" height="15" fill="white" transform="translate(0 9.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};
