import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Tweet } from '@/components/Tweet';
import { useAuth } from '@/hooks';
import { useTweets } from '@/hooks/useTweets';
import defautProfile from '@assets/images/defaultProfile.png';

export const TweetPage = () => {
  const { activeTweet, getTweetById } = useTweets();

  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();

  useEffect(() => {
    getTweetById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isAuthUser = activeTweet?.author?.id === user?.id;

  return (
    <div>
      <Tweet
        isAuthUser={isAuthUser}
        id={activeTweet?.id || ''}
        key={activeTweet?.id}
        name={activeTweet?.author.name || ''}
        username={activeTweet?.author?.username || 'Unknown'}
        content={activeTweet?.content || ''}
        likes={activeTweet?.likes || []}
        timestamp={activeTweet?.createdAt || ''}
        avatarUrl={activeTweet?.author.avatarUrl || defautProfile}
        imagesURLs={activeTweet?.images || []}
      />
    </div>
  );
};
