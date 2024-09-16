import { useEffect } from 'react';

import { Loader } from '@components/index';
import { Tweet } from '@components/Tweet';
import { TweetInput } from '@components/TweetInput';
import { useAuth } from '@hooks/useAuth';
import { useTweets } from '@hooks/useTweets';
import { Container } from '@styles/components';

export const FeedPage = () => {
  const { isLoading, user } = useAuth();

  const { feed, getAllTweets, isLoading: isFeedLoading } = useTweets();

  useEffect(() => {
    getAllTweets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!user || isLoading) return <Loader />;

  const LayoutLoading = isFeedLoading ? <Loader /> : <div>No tweets available</div>;

  return (
    <Container>
      <TweetInput />
      <div>
        {feed.length > 0
          ? feed.map((tweet) => (
              <Tweet
                isAuthUser={tweet.author.id === user.id}
                key={tweet.id}
                id={tweet.id}
                content={tweet.content}
                likes={tweet.likes}
                timestamp={tweet.createdAt}
                avatarUrl={tweet.author?.avatarUrl || ''}
                username={tweet.author?.username || ''}
                imagesURLs={tweet.images || []}
              />
            ))
          : LayoutLoading}
      </div>
    </Container>
  );
};
