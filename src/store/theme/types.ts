export interface ThemeState {
  isLightMode: boolean;
}

export const TOGGLE_LIGHT_MODE: string = 'TOGGLE_LIGHT_MODE';

export interface ToggleLightModeAction {
  type: string;
}

export type ThemeActionTypes = ToggleLightModeAction;
