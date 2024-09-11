import { iconDefaults } from '../iconsDefaults';
import { IconProps } from '../types';

export const ProfileIcon = ({ color = iconDefaults.blackIconColor, isOutline = false, size = 24 }: IconProps) => {
  return isOutline ? (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_6_407" maskUnits="userSpaceOnUse" x="0" y="0" width={size} height={size}>
        <rect width={size} height={size} fill="#C4C4C4" />
      </mask>

      <g mask="url(#mask0_6_407)">
        <path
          d="M11.351 12.16C12.706 12.16 14.223 12.01 15.191 10.904C16.005 9.974 16.269 8.536 15.997 6.512C15.617 3.687 13.88 2 11.351 2C8.82198 2 7.08498 3.687 6.70498 6.514C6.43298 8.536 6.69698 9.974 7.51098 10.904C8.47898 12.011 9.99598 12.16 11.351 12.16ZM8.19098 6.712C8.35298 5.512 8.97798 3.5 11.351 3.5C13.724 3.5 14.349 5.513 14.511 6.712C14.718 8.262 14.568 9.339 14.061 9.917C13.606 10.437 12.795 10.66 11.351 10.66C9.90698 10.66 9.09598 10.437 8.64098 9.917C8.13398 9.339 7.98398 8.261 8.19098 6.712ZM19.631 19.58C18.754 16.054 15.349 13.59 11.351 13.59C7.35298 13.59 3.94798 16.054 3.07098 19.58C2.89898 20.272 3.04298 20.98 3.46598 21.52C3.87398 22.04 4.50598 22.34 5.19898 22.34H17.503C18.196 22.34 18.828 22.04 19.236 21.52C19.66 20.98 19.803 20.273 19.63 19.58H19.631ZM18.055 20.596C17.929 20.756 17.739 20.842 17.503 20.842H5.19898C4.96398 20.842 4.77298 20.757 4.64698 20.596C4.50998 20.422 4.46698 20.184 4.52698 19.942C5.23698 17.087 8.04398 15.092 11.351 15.092C14.658 15.092 17.465 17.086 18.175 19.942C18.235 20.184 18.192 20.422 18.055 20.596Z"
          fill={color}
        />
      </g>
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_6_404" maskUnits="userSpaceOnUse" x="0" y="0" width={size} height={size}>
        ; <rect y="0.768066" width={size} height={size} fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_6_404)">
        <path
          d="M13.9701 14.9559C12.3881 14.9559 10.6194 14.7809 9.49011 13.4905C8.54044 12.4055 8.23361 10.7279 8.55095 8.36655C8.99428 5.06955 11.0196 3.10138 13.9713 3.10138C16.9229 3.10138 18.9494 5.06955 19.3916 8.36655C19.7089 10.7279 19.4009 12.4032 18.4513 13.4905C17.3196 14.7809 15.5521 14.9547 13.9713 14.9547L13.9701 14.9559ZM20.7939 26.4475H7.14628C6.37278 26.4475 5.68795 26.1209 5.22128 25.5305C4.72895 24.9075 4.54928 24.0489 4.74295 23.2346C5.71595 19.1162 9.50994 16.238 13.9689 16.238C18.4279 16.238 22.2219 19.115 23.1973 23.2346C23.3886 24.0489 23.2089 24.9075 22.7166 25.5294C22.2499 26.1185 21.5674 26.4452 20.7939 26.4452V26.4475Z"
          fill={color}
        />
      </g>
    </svg>
  );
};
