import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { UserIdRoute } from '@/types/routes';
import defautProfile from '@assets/images/defaultProfile.png';
import { EditUserModal } from '@components/EditUserModal';
import { ErrorBoundary, Loader } from '@components/index';
import { ProfileHeader } from '@components/ProfileHeader';
import { Tweet as TweetItem } from '@components/Tweet';
import { TweetInput } from '@components/TweetInput';
import { useAuth } from '@hooks/useAuth';
import { useTweets } from '@hooks/useTweets';
import { useUser } from '@hooks/useUser';
import { Container } from '@styles/components';

export const ProfilePage = () => {
  const { getUserById, userInfo: currentUser } = useUser();

  const { getUserTweets, tweetsByUser } = useTweets();

  const { id } = useParams<UserIdRoute>();
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getUserTweets(id);
    getUserById(id);
  }, [id]);

  const handleEditUser = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const isAuthUser = currentUser?.id === user?.id;

  if (!currentUser) return <Loader />;

  const tweets =
    tweetsByUser?.length > 0 ? (
      tweetsByUser.map((tweet) => (
        <TweetItem
          isAuthUser={isAuthUser}
          id={tweet.id}
          key={tweet.id}
          name={currentUser.name}
          username={currentUser?.username || 'Unknown'}
          content={tweet.content}
          likes={tweet.likes}
          timestamp={tweet.createdAt}
          avatarUrl={currentUser.avatarUrl || defautProfile}
          imagesURLs={tweet.images || []}
        />
      ))
    ) : (
      <div>There are no tweets yet</div>
    );

  const isCurrentUser = currentUser.id === id;
  const areTweetsFromCurrentUser = tweetsByUser.length > 0 && isCurrentUser;

  return (
    <>
      <Container>
        <ErrorBoundary>
          {isCurrentUser ? (
            <>
              <ProfileHeader
                isAuthUser={isAuthUser}
                name={currentUser?.name}
                username={currentUser?.username}
                bio={currentUser?.bio}
                followers={currentUser?.followers}
                following={currentUser?.following}
                avatarUrl={currentUser.avatarUrl || defautProfile}
                onEditProfile={handleEditUser}
                headerPicUrl={currentUser.headerPicUrl}
              />
              {isAuthUser && <TweetInput />}
              <div>{!areTweetsFromCurrentUser ? <Loader /> : tweets}</div>
            </>
          ) : (
            <Loader />
          )}
        </ErrorBoundary>
      </Container>
      <EditUserModal isOpen={isModalOpen} onClose={handleCloseModal} user={currentUser} />
    </>
  );
};
