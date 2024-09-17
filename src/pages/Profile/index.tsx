import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { UserIdRoute } from '@/types/routes';
import defautProfile from '@assets/images/defaultProfile.png';
import { EditUserModal } from '@components/EditUserModal';
import { Loader } from '@components/index';
import { ProfileHeader } from '@components/ProfileHeader';
import { Tweet as TweetItem } from '@components/Tweet';
import { TweetInput } from '@components/TweetInput';
import { useAuth } from '@hooks/useAuth';
import { useTweets } from '@hooks/useTweets';
import { useUser } from '@hooks/useUser';
import { Container } from '@styles/components';

export const ProfilePage = () => {
  const { getUserById, userInfo: currentUser } = useUser();

  const { getUserTweets, isLoading, tweetsByUser } = useTweets();

  const { id } = useParams<UserIdRoute>();
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getUserById(id);
  }, [id]);

  useEffect(() => {
    if (currentUser?.id) getUserTweets(currentUser?.id);
  }, [currentUser?.id]);

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

  return (
    <>
      <Container>
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
        <div>{isLoading ? <Loader /> : tweets}</div>
      </Container>
      <EditUserModal isOpen={isModalOpen} onClose={handleCloseModal} user={currentUser} />
    </>
  );
};
