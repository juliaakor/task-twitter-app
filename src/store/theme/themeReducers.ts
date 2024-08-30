import { ThemeState, ThemeActionTypes, TOGGLE_LIGHT_MODE } from './types';

const initialThemeState: ThemeState = {
  isLightMode: true,
};

// eslint-disable-next-line default-param-last
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
