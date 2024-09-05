import { iconDefaults } from '../iconsDefaults';
import { IconProps } from '../types';

export const NotificationIcon = ({
  color = iconDefaults.blackIconColor,
  height = 29,
  isOutline = false,
  width = 28,
}: IconProps) => {
  return isOutline ? (
    <svg width={width} height={height} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_6_380" maskUnits="userSpaceOnUse" x="0" y="0" width={width} height={height}>
        <rect y="0.768066" width={width} height={height} fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_6_380)">
        <path
          d="M25.3142 20.0624C25.2909 20.0437 22.8175 18.1491 22.8607 13.0274C22.884 10.0734 21.9134 7.44838 20.1225 5.63655C18.5184 4.01138 16.3461 3.11305 14.0069 3.10138H13.9917C11.6537 3.11305 9.48139 4.01139 7.87606 5.63773C6.08639 7.44956 5.1134 10.0734 5.13906 13.0274C5.18223 18.0791 2.78239 19.9889 2.68673 20.0624C2.38339 20.2876 2.25973 20.6807 2.37756 21.0401C2.49656 21.3994 2.83255 21.6409 3.20821 21.6409H8.94823C9.06723 24.3359 11.278 26.4942 13.9999 26.4942C16.7217 26.4942 18.9302 24.3359 19.0481 21.6409H24.7904C25.1661 21.6409 25.502 21.4006 25.6187 21.0412C25.7389 20.6831 25.6152 20.2887 25.3119 20.0635L25.3142 20.0624ZM14.0011 24.7407C12.2452 24.7407 10.8161 23.3676 10.7017 21.6397H17.3004C17.1837 23.3664 15.7569 24.743 14.0011 24.743V24.7407ZM5.11106 19.8897C5.9744 18.5691 6.91706 16.357 6.88906 13.011C6.86806 10.491 7.64039 8.36539 9.12089 6.86622C10.3961 5.57472 12.1309 4.85955 14.0011 4.85138C15.8712 4.86071 17.6025 5.57473 18.8777 6.86739C20.3594 8.36656 21.1329 10.4911 21.1119 13.0122C21.0839 16.3582 22.0277 18.5714 22.891 19.8909H5.11106V19.8897Z"
          fill={color}
        />
      </g>
    </svg>
  ) : (
    <svg width={width} height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.6968 15.2361C19.6768 15.2201 17.5568 13.5961 17.5938 9.20607C17.6138 6.67307 16.7818 4.42407 15.2468 2.87207C13.8718 1.47907 12.0098 0.708073 10.0048 0.700073H9.99179C7.98779 0.708073 6.12579 1.48007 4.74979 2.87207C3.21579 4.42507 2.3828 6.67406 2.4038 9.20506C2.4408 13.5371 0.383791 15.1721 0.301791 15.2351C0.0417911 15.4291 -0.0642083 15.7651 0.0367917 16.0731C0.137792 16.3811 0.426789 16.5881 0.749789 16.5881H5.24379C5.34379 19.1321 7.43179 21.1751 9.99979 21.1751C12.5678 21.1751 14.6548 19.1321 14.7558 16.5881H19.2498C19.5738 16.5881 19.8598 16.3801 19.9618 16.0731C20.0638 15.7661 19.9568 15.4291 19.6968 15.2361ZM9.99979 19.1761C8.53379 19.1761 7.34279 18.0291 7.24379 16.5881H12.7558C12.6558 18.0281 11.4658 19.1751 9.99979 19.1751V19.1761Z"
        fill={color}
      />
    </svg>
  );
};
