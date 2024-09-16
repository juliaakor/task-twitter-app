import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';

import { useTweets } from '@/hooks/useTweets';
import { ImageIcon } from '@assets/icons/imageIcon';
import defautProfile from '@assets/images/defaultProfile.png';
import { Button, ImagePreviewList } from '@components/common';
import { ButtonType } from '@components/common/Button/types';
import { useAuth, useStorageUpload } from '@hooks/index';
import { AvatarMedium } from '@styles/components';

import { ButtonContainer, InputArea, TextArea, TweetInputContainer, Input } from './styled';

export const TweetInput = () => {
  const { user } = useAuth();
  const { addTweet } = useTweets();

  const [content, setContent] = useState('');
  const { handleImageChange, removeImage, resetImages, selectedImages, uploadImages } = useStorageUpload();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleTweet = async () => {
    if (content.trim() || selectedImages.length > 0) {
      const imageURLs = await uploadImages();

      await addTweet({ content, images: imageURLs }, user?.id || '');

      setContent('');
      resetImages();
    }
  };

  const handleImageIconClick = () => {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'Enter') return;

    handleImageIconClick();
  };

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <TweetInputContainer>
      <AvatarMedium src={user?.avatarUrl || defautProfile} alt="User Avatar" />
      <InputArea>
        <TextArea value={content} onChange={handleTextareaChange} placeholder="What's happening?" rows={2} />

        <ImagePreviewList selectedImages={selectedImages} removeImage={removeImage} />

        <ButtonContainer>
          <div
            aria-label="Upload image"
            role="button"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onClick={handleImageIconClick}
          >
            <ImageIcon />
          </div>
          <Input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" multiple />
          <Button disabled={!content} label="Tweet" name="Tweet" styleType={ButtonType.Brand} onClick={handleTweet} />
        </ButtonContainer>
      </InputArea>
    </TweetInputContainer>
  );
};
