import { Link } from 'react-router-dom';

import { Content, TweetText } from '@components/Tweet/styled';
import { AvatarMedium, Username } from '@styles/components';

import { TweetsListContainer, TweetContainer } from './styled';
import { TweetsListProps } from './types';

export const TweetsList = ({ tweets }: TweetsListProps) => {
  return (
    <TweetsListContainer>
      {tweets.map((tweet) => (
        <Link to={`/tweet/${tweet.id}`} key={tweet.id}>
          <TweetContainer>
            <AvatarMedium src={tweet.author.avatarUrl} alt={`${tweet.author.username}'s Avatar`} />
            <Content>
              {tweet.author.name} <Username>{tweet.author.username}</Username>
              <TweetText>{tweet.content}</TweetText>
            </Content>
          </TweetContainer>
        </Link>
      ))}
    </TweetsListContainer>
  );
};
