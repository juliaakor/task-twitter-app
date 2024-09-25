import { failImageSizeLimitToast } from '@lib/toasts';

const MAX_FILE_SIZE_MB = 5;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

export const isFileOverLimit = (file: File) => {
  if (file.size > MAX_FILE_SIZE_BYTES) {
    failImageSizeLimitToast(`File ${file.name} is larger than ${MAX_FILE_SIZE_MB} MB and will not be added.`);

    return false;
  }

  return true;
};
