import { RootState } from '@store/index';

export const selectIsLightMode = (state: RootState): boolean => state.theme.isLightMode;
