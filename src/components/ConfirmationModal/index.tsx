import { Button } from '@components/common';
import { ButtonType } from '@components/common/Button/types';
import { Modal } from '@components/Modal';
import { OutsideClickProvider } from '@components/OutsideClickProvider';

import { ButtonsContainer, Header, Info } from './styled';
import { ConfirmationModalProps } from './types';

export const ConfirmationModal = ({ isOpen, onClose, onConfirm }: ConfirmationModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <OutsideClickProvider onOutsideClick={onClose}>
        <Header>Confirm Deletion</Header>
        <Info>Are you sure you want to delete this tweet?</Info>
        <ButtonsContainer>
          <Button onClick={onClose} type="button" label="Cancel" name="Cancel" styleType={ButtonType.Outline} />
          <Button onClick={onConfirm} type="button" label="Delete" name="Delete" styleType={ButtonType.Black} />
        </ButtonsContainer>
      </OutsideClickProvider>
    </Modal>
  );
};
