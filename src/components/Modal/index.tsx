import { OutsideClickProvider } from '@components/OutsideClickProvider';
import { PortalProvider } from '@components/PortalProvider';

import { CloseButton, ModalContent, ModalOverlay } from './styled';
import { ModalProps } from './types';

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <PortalProvider>
      <ModalOverlay>
        <OutsideClickProvider onOutsideClick={onClose}>
          <ModalContent>
            <CloseButton onClick={onClose}>×</CloseButton>
            {children}
          </ModalContent>
        </OutsideClickProvider>
      </ModalOverlay>
    </PortalProvider>
  );
};
