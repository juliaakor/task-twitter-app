import { KeyboardEvent } from 'react';

import { useAppDispatch, useAppSelector } from '@store/index';
import { toggleLightMode, selectIsLightMode } from '@store/theme';

import { Circle, SwitchItem, ThemeSwitcher } from './styled';

export const Switch = () => {
  const dispatch = useAppDispatch();
  const isLightMode = useAppSelector(selectIsLightMode);

  const toggleSwitch = () => {
    dispatch(toggleLightMode());
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Enter') return;

    toggleSwitch();
    event.preventDefault();
  };

  return (
    <ThemeSwitcher
      onClick={toggleSwitch}
      onKeyDown={handleKeyDown}
      role="switch"
      aria-checked={isLightMode}
      tabIndex={0}
      aria-label="Toggle theme switch"
    >
      <SwitchItem>
        <Circle $isOn={isLightMode} />
      </SwitchItem>
    </ThemeSwitcher>
  );
};
