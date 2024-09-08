import { iconDefaults } from '../iconsDefaults';
import { IconProps } from '../types';

export const PinIcon = ({ color = iconDefaults.grayIconColor, size = 24 }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.2352 14.61C19.8602 12.865 17.8932 11.104 16.2252 10.485L15.6812 5.53701L17.1762 3.29501C17.3332 3.05901 17.3482 2.75701 17.2132 2.50801C17.0792 2.25801 16.8212 2.10501 16.5382 2.10501H7.39816C7.11416 2.10501 6.85616 2.25901 6.72216 2.50801C6.58816 2.75801 6.60216 3.06101 6.76016 3.29601L8.25816 5.54301L7.77416 10.486C6.10616 11.106 4.14116 12.866 3.77016 14.602C3.73016 14.762 3.75416 15.006 3.90216 15.196C4.00516 15.328 4.20616 15.486 4.58216 15.486H8.64016L11.5442 22.198C11.6222 22.382 11.8042 22.5 12.0022 22.5C12.2002 22.5 12.3822 22.382 12.4622 22.198L15.3652 15.485H19.4222C19.7982 15.485 19.9982 15.329 20.1022 15.199C20.2482 15.011 20.2742 14.765 20.2372 14.609L20.2352 14.61Z"
        fill={color}
      />
    </svg>
  );
};
