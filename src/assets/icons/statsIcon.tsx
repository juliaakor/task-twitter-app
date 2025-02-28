import { iconDefaults } from '../iconsDefaults';
import { IconProps } from '../types';

export const StatsIcon = ({ color = iconDefaults.blackIconColor, size = 24 }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_6_422" maskUnits="userSpaceOnUse" x="0" y="0" width={size} height={size}>
        <rect width={size} height={size} fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_6_422)">
        <path
          d="M20.222 9.552H18.888C18.903 9.462 18.916 9.37 18.916 9.275V6.962C18.916 5.982 18.119 5.185 17.138 5.185H3.5V3.75C3.5 3.336 3.164 3 2.75 3C2.336 3 2 3.336 2 3.75V21.222C2 21.637 2.336 21.972 2.75 21.972C3.164 21.972 3.5 21.637 3.5 21.222V19.788H14.056C15.036 19.788 15.834 18.991 15.834 18.011V15.698C15.834 15.603 15.82 15.511 15.806 15.42H20.223C21.203 15.42 22.001 14.622 22.001 13.642V11.332C22.001 10.349 21.204 9.552 20.223 9.552H20.222ZM17.14 6.685C17.292 6.685 17.417 6.809 17.417 6.962V9.272C17.417 9.426 17.292 9.552 17.139 9.552H3.5V6.682H17.14V6.685ZM14.333 15.699V18.011C14.333 18.164 14.208 18.288 14.055 18.288H3.5V15.42H14.056C14.209 15.42 14.333 15.546 14.333 15.7V15.699ZM20.5 13.642C20.5 13.795 20.375 13.919 20.222 13.919H3.5V11.052H20.222C20.375 11.052 20.5 11.176 20.5 11.329V13.642Z"
          fill={color}
        />
      </g>
    </svg>
  );
};
