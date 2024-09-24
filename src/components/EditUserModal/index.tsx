import { ChangeEvent, useRef, useState } from 'react';

import { isFileOverLimit } from '@/lib/helpers';
import { Button, Form, Input } from '@components/common';
import { ButtonType } from '@components/common/Button/types';
import { Modal } from '@components/Modal';
import { EDIT_USER_INFO_INPUTS, PASSWORD_UPDATE_INPUTS } from '@constants/userInputs';
import { useError } from '@hooks/useError';
import { useUser } from '@hooks/useUser';
import { useUserImageUpload } from '@hooks/useUserImageUpload';
import { passwordUpdateSchema, UpdatePassword } from '@lib/yup/passwordUpdate';
import { UpdateUser, updateUserSchema } from '@lib/yup/updateUser';
import { User } from '@type/models';

import { FileInput, FileInputContainer, FileLabel, FileName, Heading, ModalContent } from './styled';
import { EditUserModalProps } from './types';

export const EditUserModal = ({ isOpen, onClose, user }: EditUserModalProps) => {
  const { errorHandler } = useError();
  const { editUser, updatePassword } = useUser();

  const [avatar, setAvatar] = useState<File | null>(null);
  const [header, setHeader] = useState<File | null>(null);

  const avatarInputRef = useRef<HTMLInputElement>(null);
  const headerInputRef = useRef<HTMLInputElement>(null);

  const { uploadImage } = useUserImageUpload();

  const handlenNewPasswordSubmit = (formData: UpdatePassword) => {
    updatePassword(user.id, formData.currentPassword, formData.newPassword);
  };

  const handleSubmit = async (formData: UpdateUser) => {
    try {
      const newAvatarUrl = avatar ? await uploadImage(avatar, 'avatar', user.id, user.avatarUrl) : '';
      const newHeaderUrl = header ? await uploadImage(header, 'header', user.id, user.headerPicUrl) : '';

      const updateData: Partial<User> = {
        bio: formData.bio,
        name: formData.name,
        username: formData.username,
      };

      if (newAvatarUrl) {
        updateData.avatarUrl = newAvatarUrl;
      }

      if (newHeaderUrl) {
        updateData.headerPicUrl = newHeaderUrl;
      }

      editUser(user.id, updateData);
    } catch (error) {
      errorHandler();
    }
  };

  const handleFileChange = (file: File | null, setFile: (file: File | null) => void) => {
    if (file && isFileOverLimit(file)) {
      setFile(file);
    } else {
      setFile(null);
    }
  };

  const USER_FILES_INPUTS = [
    {
      file: avatar,
      label: 'Choose avatar',
      name: 'avatar',
      onChange: (e: ChangeEvent<HTMLInputElement>) => handleFileChange(e.target.files?.[0] || null, setAvatar),
      ref: avatarInputRef,
    },
    {
      file: header,
      label: 'Choose header',
      name: 'header',
      onChange: (e: ChangeEvent<HTMLInputElement>) => handleFileChange(e.target.files?.[0] || null, setHeader),
      ref: headerInputRef,
    },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <Heading>Edit User Info</Heading>
        <Form yupSchema={updateUserSchema} defaultValues={user} onSubmit={handleSubmit}>
          {EDIT_USER_INFO_INPUTS.map((inputAttr) => (
            <Input key={inputAttr.label} {...inputAttr} type="text" />
          ))}
          {USER_FILES_INPUTS.map((fileAttr) => (
            <FileInputContainer key={fileAttr.name}>
              <FileInput {...fileAttr} type="file" accept="image/*" id={fileAttr.name} />
              <FileLabel htmlFor={fileAttr.name}>{fileAttr.label}</FileLabel>
              <FileName>{fileAttr?.file?.name}</FileName>
            </FileInputContainer>
          ))}
          <Button label="Update" name="Update" type="submit" styleType={ButtonType.Brand} />
        </Form>

        <Heading>Change Password</Heading>
        <Form
          yupSchema={passwordUpdateSchema}
          onSubmit={handlenNewPasswordSubmit}
          defaultValues={{ confirmCurrentPassword: '', currentPassword: '', newPassword: '' }}
        >
          {PASSWORD_UPDATE_INPUTS.map((passwordFieldAttr) => (
            <Input key={passwordFieldAttr.name} {...passwordFieldAttr} type="password" />
          ))}
          <Button label="changePassword" name="Change password" type="submit" styleType={ButtonType.Brand} />
        </Form>
      </ModalContent>
    </Modal>
  );
};
