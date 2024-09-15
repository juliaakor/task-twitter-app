import toast, { DefaultToastOptions } from 'react-hot-toast';

import { getTheme } from '@styles/theme';

const baseToastConfig: DefaultToastOptions = {
  ariaProps: {
    'aria-live': 'polite',
    role: 'status',
  },
  position: 'top-right',
  style: {},
};

const { colors } = getTheme();

const failToastConfig = {
  ...baseToastConfig,
  duration: 6000,
  icon: '💡',
  style: {
    backgroundColor: colors.hightlightBrand,
    color: colors.textButton,
  },
};

export const failLoadMoreImagedToast = () => toast('Sorry, you cannot add more than 4 images', failToastConfig);
