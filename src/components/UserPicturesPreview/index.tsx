import { useEffect, useState } from 'react';

import { useModal } from '@/hooks';
import { useUser } from '@/hooks/useUser';
import { ImagePopup } from '@components/ImagePopup';
import { useTweets } from '@hooks/useTweets';

import { GalleryContainer, GalleryImage, GalleryItem } from './styled';
import { UserPicturesPreviewProps } from './types';

const MAX_PREVIEW_IMAGES = 6;

export const UserPicturesPreview = ({ id }: UserPicturesPreviewProps) => {
  const { closeModal, isModalOpen, openModal } = useModal(false);
  const [selectedImage, setSelectedImage] = useState<string | undefined>();

  const { tweetsByUser } = useTweets();
  const { userInfo } = useUser();
  const [images, setImages] = useState<string[]>([]);

  const handleImageClick = (url: string) => () => {
    setSelectedImage(url);
    openModal();
  };

  const handleCloseImage = () => {
    setSelectedImage(undefined);
    closeModal();
  };

  useEffect(() => {
    setImages(tweetsByUser.filter((tweet) => tweet.images).flatMap((tweet) => tweet.images || []));
  }, [tweetsByUser]);

  const isCurrentUser = images && tweetsByUser.length > 0 && id === userInfo?.id;

  return (
    isCurrentUser && (
      <>
        <GalleryContainer>
          {images.slice(0, MAX_PREVIEW_IMAGES).map((url, index) => (
            <GalleryItem $position={index} key={url}>
              <GalleryImage src={url} alt={`Tweet Image ${index}`} onClick={handleImageClick(url)} />
            </GalleryItem>
          ))}
        </GalleryContainer>
        <ImagePopup isImageOpen={isModalOpen} closeImage={handleCloseImage} selectedImage={selectedImage} />
      </>
    )
  );
};
