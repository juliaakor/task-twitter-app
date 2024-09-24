import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useState } from 'react';

import { generateIdWithoutHash } from '@/lib/auth/generateId';
import { isFileOverLimit } from '@lib/helpers';
import { failLoadMoreImagedToast } from '@lib/toasts';

import { useError } from './useError';

const MAX_IMAGES_LIMIT = 4;

export interface ImageFile {
  id: string;
  file: File;
}

export const useStorageUpload = () => {
  const { errorHandler } = useError();

  const [uploading, setUploading] = useState(false);
  const [imageURLs, setImageURLs] = useState<string[]>([]);
  const [selectedImages, setSelectedImages] = useState<ImageFile[]>([]);

  const uploadImages = async () => {
    setUploading(true);

    const storage = getStorage();

    const uploadPromises = selectedImages.map(async ({ file, id }) => {
      const storageRef = ref(storage, `tweets/${id}`);
      await uploadBytes(storageRef, file);

      return getDownloadURL(storageRef);
    });

    try {
      const urls = await Promise.all(uploadPromises);
      setImageURLs(urls);

      return urls;
    } catch (error) {
      errorHandler();
    } finally {
      setUploading(false);
    }

    return [];
  };

  const resetImages = () => {
    setImageURLs([]);
    setSelectedImages([]);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const newFiles = Array.from(e.target.files)
      .filter((file) => isFileOverLimit(file))
      .map((file) => ({
        file,
        id: file.name + generateIdWithoutHash(),
      }));

    const totalImages = selectedImages.length + newFiles.length;

    if (totalImages > MAX_IMAGES_LIMIT) {
      failLoadMoreImagedToast();
      const remainingSlots = MAX_IMAGES_LIMIT - selectedImages.length;
      const filesToAdd = newFiles.slice(0, remainingSlots);

      setSelectedImages([...selectedImages, ...filesToAdd]);

      return;
    }

    setSelectedImages([...selectedImages, ...newFiles]);
  };

  const removeImage = (id: string) => {
    const newImages = selectedImages.filter((image) => image.id !== id);
    setSelectedImages(newImages);
  };

  return { handleImageChange, imageURLs, removeImage, resetImages, selectedImages, uploadImages, uploading };
};
