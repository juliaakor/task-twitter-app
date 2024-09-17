import { KeyboardEvent } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { Routes } from '@/types/routes';
import { ArrowLeftIcon } from '@assets/icons/arrowLeftIcon';
import { Switch } from '@components/common';
import { ROUTES } from '@constants/routes';
import { useTweets } from '@hooks/useTweets';
import { useUser } from '@hooks/useUser';

import { HeaderContainer, InfoContainer, Title, SubTitle, IconWrapper, HeaderInfo } from './styled';

export const PageHeader = () => {
  const location = useLocation();
  const { id, tweetId } = useParams<Routes>();

  const { userInfo } = useUser();
  const { tweetsByUser } = useTweets();

  const isTweetPage = location.pathname.startsWith(`/tweet/${tweetId}`);
  const isProfilePage = location.pathname.startsWith(`/profile/${id}`);

  const title = isProfilePage ? userInfo?.name : 'Home';

  const navigate = useNavigate();

  const handleBackNavigation = () => {
    navigate(ROUTES.HOME);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'Enter') return;

    handleBackNavigation();
  };

  return (
    <HeaderContainer>
      <HeaderInfo>
        {isTweetPage && (
          <>
            <IconWrapper role="button" tabIndex={0} onKeyDown={handleKeyDown} onClick={handleBackNavigation}>
              <ArrowLeftIcon />
            </IconWrapper>
            {' | '}
          </>
        )}
        <InfoContainer>
          <Title>{title}</Title>
          {isProfilePage && <SubTitle>{`${tweetsByUser.length} Tweets`}</SubTitle>}
        </InfoContainer>
      </HeaderInfo>
      <Switch />
    </HeaderContainer>
  );
};
