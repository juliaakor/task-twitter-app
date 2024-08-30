import { TOGGLE_LIGHT_MODE, ThemeActionTypes } from './types';

const createAction = <T extends string>(type: T): { type: T } => {
  return { type };
};

export const toggleLightMode = (): ThemeActionTypes => createAction(TOGGLE_LIGHT_MODE);
