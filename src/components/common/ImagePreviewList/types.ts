import { ImageFile } from '@hooks/useStorageUpload';

export interface ImagePreviewListProps {
  removeImage: (index: string) => void;
  selectedImages: ImageFile[];
}
