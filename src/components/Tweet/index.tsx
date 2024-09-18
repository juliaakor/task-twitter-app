import { KeyboardEvent, useState } from 'react';
import { useTheme } from 'styled-components';

import { LikeIcon } from '@assets/icons/likeIcon';
import { MenuIcon } from '@assets/icons/menuIcon';
import { ConfirmationModal } from '@components/ConfirmationModal';
import { Dropdown } from '@components/Dropdown';
import { DropdownOption } from '@components/Dropdown/types';
import { ImagePopup } from '@components/ImagePopup';
import { OutsideClickProvider } from '@components/OutsideClickProvider';
import { useAuth, useModal } from '@hooks/index';
import { useTweets } from '@hooks/useTweets';
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
  Name,
} from './styled';
import { TweetProps } from './types';

export const Tweet = ({
  avatarUrl,
  content,
  id,
  imagesURLs,
  isAuthUser,
  likes,
  name,
  timestamp,
  username,
}: TweetProps) => {
  const theme = useTheme();
  const { user } = useAuth();
  const { deleteTweet, toggleLike } = useTweets();

  const { closeModal: closeDropdown, isModalOpen: isDropdownOpen, openModal: openDropdown } = useModal(false);
  const { closeModal: closeImage, isModalOpen: isImageOpen, openModal: openImage } = useModal(false);
  const {
    closeModal: closeComfirmation,
    isModalOpen: isComfirmationOpen,
    openModal: openComfirmation,
  } = useModal(false);

  const [selectedImage, setSelectedImage] = useState<string | undefined>();

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
    setSelectedImage(undefined);
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
        <Name>{name}</Name>

        <Username>{username}</Username>

        <Timestamp>{getTimeAgoStringFromDate(timestamp)}</Timestamp>
        {isAuthUser && (
          <DropdownIconWrapper onClick={openDropdown}>
            <MenuIcon color={theme.colors.textPrimary} />
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
            <LikeIcon isOutline={likes.includes(user?.id || '')} color={theme.colors.textPrimary} />
          </div>
        </LikeContainer>
      </Content>

      <ImagePopup closeImage={handleCloseImage} isImageOpen={isImageOpen} selectedImage={selectedImage} />

      <ConfirmationModal isOpen={isComfirmationOpen} onClose={closeComfirmation} onConfirm={handleDeleteTweet} />
    </TweetContainer>
  );
};
