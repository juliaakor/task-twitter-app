import { iconDefaults } from '../iconsDefaults';
import { IconProps } from '../types';

export const ExploreIcon = ({
  color = iconDefaults.blackIconColor,
  height = 29,
  isOutline = false,
  width = 28,
}: IconProps) => {
  return isOutline ? (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.5848 8.23606C19.2448 8.23606 19.7848 7.69806 19.7848 7.03606C19.7848 6.37406 19.2448 5.83605 18.5848 5.83605H15.3648L15.6748 2.28905C15.7018 1.97105 15.6048 1.65905 15.3978 1.41405C15.1918 1.16905 14.9028 1.01805 14.5758 0.989049C13.9258 0.954049 13.3408 1.42105 13.2828 2.08205L12.9568 5.83605H7.89981L8.20781 2.29105C8.26781 1.63305 7.77781 1.04905 7.11081 0.989049C6.44581 0.939049 5.87581 1.41906 5.81781 2.08106L5.49281 5.83506H2.16281C1.49981 5.83506 0.962814 6.37305 0.962814 7.03505C0.962814 7.69705 1.50081 8.23505 2.16281 8.23505H5.28482L4.84482 13.2991H1.41582C0.753817 13.2991 0.21582 13.8391 0.21582 14.4991C0.21582 15.1591 0.753817 15.7011 1.41582 15.7011H4.63582L4.32582 19.2491C4.26882 19.9061 4.75782 20.4891 5.41582 20.5491L5.52182 20.5541C6.14782 20.5541 6.66181 20.0821 6.71681 19.4561L7.04382 15.7031H12.0998L11.7918 19.2471C11.7318 19.9051 12.2218 20.4891 12.8818 20.5491L12.9878 20.5541C13.6048 20.5541 14.1298 20.0721 14.1828 19.4561L14.5078 15.7031H17.8378C18.4978 15.7031 19.0378 15.1631 19.0378 14.5031C19.0378 13.8431 18.4978 13.3011 17.8378 13.3011H14.7158L15.1558 8.23705H18.5858L18.5848 8.23606ZM12.7468 8.23606L12.3068 13.2991H7.25282L7.69281 8.23705H12.7478L12.7468 8.23606Z"
        fill={color}
      />
    </svg>
  ) : (
    <svg width={width} height={height} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_6_385" maskUnits="userSpaceOnUse" x="0" y="0" width={width} height={height}>
        <rect y="0.768066" width={width} height={height} fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_6_385)">
        <path
          d="M24.2085 10.2018H19.6235L20.0575 5.21781C20.0995 4.73714 19.7425 4.31364 19.2618 4.27048C18.7753 4.23548 18.3565 4.58548 18.3145 5.06731L17.8677 10.2006H10.4943L10.926 5.21896C10.9692 4.73713 10.611 4.31364 10.1327 4.27048C9.64266 4.23548 9.22616 4.58548 9.18416 5.06731L8.73849 10.2006H4.12083C3.63783 10.2006 3.24583 10.5938 3.24583 11.0756C3.24583 11.5575 3.63783 11.9506 4.12083 11.9506H8.58683L7.94516 19.3321H3.2085C2.7255 19.3321 2.3335 19.7241 2.3335 20.2071C2.3335 20.6901 2.7255 21.0821 3.2085 21.0821H7.7935L7.35949 26.0661C7.31749 26.5468 7.67449 26.9703 8.15516 27.0135L8.23216 27.017C8.68133 27.017 9.06283 26.6728 9.1025 26.2166L9.54933 21.0833H16.9227L16.491 26.065C16.449 26.5468 16.806 26.9703 17.2867 27.0135L17.3637 27.017C17.8128 27.017 18.1943 26.6728 18.234 26.2166L18.6797 21.0833H23.2962C23.778 21.0833 24.1712 20.6901 24.1712 20.2083C24.1712 19.7265 23.778 19.3333 23.2962 19.3333H18.8302L19.4718 11.9518H24.2085C24.6915 11.9518 25.0835 11.5598 25.0835 11.0768C25.0835 10.5938 24.6915 10.2018 24.2085 10.2018ZM17.0743 19.3321H9.701L10.3427 11.9518H17.716L17.0743 19.3321Z"
          fill={color}
        />
      </g>
    </svg>
  );
};
