import { iconDefaults } from '../iconsDefaults';
import { IconProps } from '../types';

export const LikeIcon = ({ color = iconDefaults.blackIconColor, isOutline = false, size = 24 }: IconProps) => {
  return isOutline ? (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_6_435" maskUnits="userSpaceOnUse" x="0" y="0" width={size} height={size}>
        <rect width={size} height={size} fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_6_435)">
        <path
          d="M12.05 21.914H12.036C9.453 21.866 2 15.132 2 8.754C2 5.69 4.525 3 7.403 3C9.693 3 11.233 4.58 12.049 5.73C12.863 4.582 14.403 3 16.694 3C19.574 3 22.098 5.69 22.098 8.755C22.098 15.131 14.644 21.865 12.061 21.912H12.05V21.914ZM7.404 4.501C5.324 4.501 3.501 6.489 3.501 8.756C3.501 14.496 10.535 20.352 12.051 20.414C13.569 20.352 20.601 14.497 20.601 8.756C20.601 6.489 18.778 4.501 16.698 4.501C14.17 4.501 12.758 7.437 12.746 7.466C12.516 8.028 11.59 8.028 11.359 7.466C11.345 7.436 9.93401 4.501 7.40501 4.501H7.404Z"
          fill={color}
        />
      </g>
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.0002 21.638H11.9862C9.4032 21.59 1.9502 14.856 1.9502 8.478C1.9502 5.414 4.4752 2.724 7.3532 2.724C9.6432 2.724 11.1832 4.304 11.9992 5.454C12.8132 4.306 14.3532 2.724 16.6442 2.724C19.5242 2.724 22.0482 5.414 22.0482 8.479C22.0482 14.855 14.5942 21.589 12.0112 21.636H12.0002V21.638Z"
        fill={iconDefaults.redIconColor}
      />
    </svg>
  );
};
