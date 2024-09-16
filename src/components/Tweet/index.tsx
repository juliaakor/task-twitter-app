import { KeyboardEvent, useState } from 'react';

import { LikeIcon } from '@assets/icons/likeIcon';
import { MenuIcon } from '@assets/icons/menuIcon';
import { Dropdown } from '@components/Dropdown';
import { DropdownOption } from '@components/Dropdown/types';
import { OutsideClickProvider } from '@components/OutsideClickProvider';
import { useAuth, useModal } from '@hooks/index';
import { getTimeAgoStringFromDate } from '@lib/format/getTimeAgoStringFromDate';
import { AvatarMedium, Username } from '@styles/components';

import {
  TweetImage,
  TweetImagesContainer,
  DropdownIconWrapper,
  TweetContainer,
  Content,
  Timestamp,
  TweetText,
  LikeContainer,
  ModalImage,
} from './styled';
import { TweetProps } from './types';
import { useTweets } from '../../hooks/useTweets';
import { ConfirmationModal } from '../ConfirmationModal';
import { Modal } from '../Modal';

export const Tweet = ({ avatarUrl, content, id, imagesURLs, isAuthUser, likes, timestamp, username }: TweetProps) => {
  const { user } = useAuth();
  const { deleteTweet, toggleLike } = useTweets();

  const { closeModal: closeDropdown, isModalOpen: isDropdownOpen, openModal: openDropdown } = useModal(false);
  const { closeModal: closeImage, isModalOpen: isImageOpen, openModal: openImage } = useModal(false);
  const {
    closeModal: closeComfirmation,
    isModalOpen: isComfirmationOpen,
    openModal: openComfirmation,
  } = useModal(false);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleDeleteTweet = async () => {
    if (!user || !isAuthUser) return;

    deleteTweet(id);
    closeComfirmation();
    closeDropdown();
  };

  const TweetActions: DropdownOption[] = [{ label: 'Delete', onClick: openComfirmation }];

  const handleToggleLike = async () => {
    if (!user) return;

    toggleLike(id, user.id);
  };

  const handleImageClick = (url: string) => () => {
    setSelectedImage(url);
    openImage();
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
    closeImage();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'Enter') return;

    handleToggleLike();
  };

  return (
    <TweetContainer>
      <AvatarMedium src={avatarUrl} alt="Avatar" />
      <Content>
        <Username>{username}</Username>

        <Timestamp>{getTimeAgoStringFromDate(timestamp)}</Timestamp>

        {isAuthUser && (
          <DropdownIconWrapper onClick={openDropdown}>
            <MenuIcon />
            <OutsideClickProvider onOutsideClick={closeDropdown}>
              <Dropdown isOpen={isDropdownOpen} options={TweetActions} />
            </OutsideClickProvider>
          </DropdownIconWrapper>
        )}

        <TweetText>{content}</TweetText>

        <TweetImagesContainer $imageCount={imagesURLs.length}>
          {imagesURLs &&
            imagesURLs.map((url) => (
              <TweetImage key={url} src={url} alt="attachment" onClick={handleImageClick(url)} />
            ))}
        </TweetImagesContainer>

        <LikeContainer>
          {likes.length}{' '}
          <div aria-label="Toggle like" role="button" tabIndex={0} onKeyDown={handleKeyDown} onClick={handleToggleLike}>
            <LikeIcon isOutline={likes.includes(user?.id || '')} />
          </div>
        </LikeContainer>
      </Content>

      {selectedImage && (
        <Modal isOpen={isImageOpen} onClose={handleCloseImage}>
          <ModalImage src={selectedImage} alt="Selected" />
        </Modal>
      )}

      <ConfirmationModal isOpen={isComfirmationOpen} onClose={closeComfirmation} onConfirm={handleDeleteTweet} />
    </TweetContainer>
  );
};
