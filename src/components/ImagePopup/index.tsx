import { Modal } from '@components/Modal';

import { ModalImage } from './styled';
import { ImagePopupProps } from './types';

export const ImagePopup = ({ closeImage, isImageOpen, selectedImage }: ImagePopupProps) => {
  return (
    selectedImage && (
      <Modal isOpen={isImageOpen} onClose={closeImage}>
        <ModalImage src={selectedImage} alt="Selected" />
      </Modal>
    )
  );
};
