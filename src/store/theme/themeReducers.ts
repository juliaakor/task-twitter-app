import { ThemeState, ThemeActionTypes, TOGGLE_LIGHT_MODE } from './types';

const initialThemeState: ThemeState = {
  isLightMode: true,
};

export const themeReducer = (state = initialThemeState, action: ThemeActionTypes): ThemeState => {
  switch (action.type) {
    case TOGGLE_LIGHT_MODE:
      return {
        ...state,
        isLightMode: !state.isLightMode,
      };
    default:
      return state;
  }
};
