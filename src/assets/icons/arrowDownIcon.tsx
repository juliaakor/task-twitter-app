import { iconDefaults } from '../iconsDefaults';
import { IconProps } from '../types';

export const ArrowDownIcon = ({ color = iconDefaults.blackIconColor, height = 11, width = 18 }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.207 0.915059C16.817 0.525059 16.184 0.525059 15.793 0.915059L8.99999 7.70806L2.20699 0.915059C1.81699 0.525059 1.18399 0.525059 0.792988 0.915059C0.402988 1.30506 0.402988 1.93806 0.792988 2.32906L8.29299 9.82906C8.48799 10.0251 8.74299 10.1231 8.99999 10.1231C9.25699 10.1231 9.51199 10.0251 9.70699 9.83006L17.207 2.33006C17.597 1.94006 17.597 1.30806 17.207 0.917057V0.915059Z"
        fill={color}
      />
    </svg>
  );
};
