import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { useState } from 'react';

import { ENV } from '@/constants/env';

import { useError } from './useError';

export const useUserImageUpload = () => {
  const { errorHandler } = useError();
  const [uploading, setUploading] = useState(false);

  const uploadImage = async (file: File, folder: string, userId: string, prevUrl?: string) => {
    setUploading(true);
    const storage = getStorage();

    try {
      if (prevUrl && prevUrl.includes(ENV.firebaseStorageBucket || '')) {
        const prevImageRef = ref(storage, prevUrl);
        await deleteObject(prevImageRef);
      }

      const storageRef = ref(storage, `users/${userId}/${folder}/${file.name}-${Date.now()}`);
      await uploadBytes(storageRef, file);
      const downloadUrl = await getDownloadURL(storageRef);

      return downloadUrl;
    } catch (error) {
      errorHandler();

      return null;
    } finally {
      setUploading(false);
    }
  };

  return { uploadImage, uploading };
};
