export interface ThemeState {
  isLightMode: boolean;
}

export const TOGGLE_LIGHT_MODE: string = 'TOGGLE_LIGHT_MODE';

export interface ToggleLightModeAction {
  type: typeof TOGGLE_LIGHT_MODE;
}

export type ThemeActionTypes = ToggleLightModeAction;
