import toast, { DefaultToastOptions } from 'react-hot-toast';

import { getTheme } from '@styles/theme';

const { colors } = getTheme();

const baseToastConfig: DefaultToastOptions = {
  ariaProps: {
    'aria-live': 'polite',
    role: 'status',
  },
  position: 'top-right',
  style: {
    backgroundColor: colors.hightlightBrand,
    color: colors.textButton,
  },
};

const successToastConfig = {
  ...baseToastConfig,
  duration: 4000,
  icon: '👏',
};

const failToastConfig = {
  ...baseToastConfig,
  duration: 6000,
  icon: '💡',
};

export const failLoadMoreImagedToast = () => toast('Sorry, you cannot add more than 4 images', failToastConfig);

export const passwordResetSuccess = () => toast('Password was updated', successToastConfig);

export const passwordResetFail = () => toast('Sorry, couldnt update the password, try again later', failToastConfig);
