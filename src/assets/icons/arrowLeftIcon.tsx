import { iconDefaults } from '../iconsDefaults';
import { IconProps } from '../types';

export const ArrowLeftIcon = ({ color = iconDefaults.blackIconColor, height = 21, width = 30 }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_376_845)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.1619 9.84379H3.07313L10.8778 4.40151C11.2444 4.14492 11.2444 3.72951 10.8778 3.47357C10.5113 3.21698 9.91782 3.21698 9.5522 3.47357L0.270947 9.96979C-0.0899902 10.2224 -0.0899902 10.6451 0.270947 10.8977L9.5522 17.3946C9.91876 17.6512 10.5122 17.6512 10.8778 17.3946C11.2444 17.138 11.2444 16.7226 10.8778 16.4667L3.07313 11.1563H29.1619C29.6794 11.1563 30.0994 10.8623 30.0994 10.5C30.0994 10.1378 29.6794 9.84379 29.1619 9.84379Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_376_845">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
