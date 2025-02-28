import { iconDefaults } from '../iconsDefaults';
import { IconProps } from '../types';

export const SearchIcon = ({ color = iconDefaults.blackIconColor, height = 25, width = 24 }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_6_441" maskUnits="userSpaceOnUse" x="0" y="0" width={width} height={height}>
        <rect y="0.768066" width={width} height={height} fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_6_441)">
        <path
          d="M21.53 21.2381L17.87 17.5781C19.195 16.0081 20 13.9821 20 11.7681C20 6.79807 15.97 2.76807 11 2.76807C6.03 2.76807 2 6.79807 2 11.7681C2 16.7381 6.03 20.7681 11 20.7681C13.215 20.7681 15.24 19.9641 16.808 18.6381L20.468 22.2981C20.615 22.4441 20.808 22.5181 20.998 22.5181C21.188 22.5181 21.383 22.4451 21.528 22.2981C21.823 22.0051 21.823 21.5311 21.53 21.2381ZM3.5 11.7681C3.5 7.63307 6.865 4.26807 11 4.26807C15.135 4.26807 18.5 7.63307 18.5 11.7681C18.5 15.9031 15.135 19.2681 11 19.2681C6.865 19.2681 3.5 15.9031 3.5 11.7681Z"
          fill={color}
        />
      </g>
    </svg>
  );
};
