import { RootState } from '@store/index';
import { Tweet, TweetWithAuthor } from '@type/models/Tweet';

export const selectTweetsState = (state: RootState) => state.tweets;

export const selectTweetError = (state: RootState): string | null => selectTweetsState(state).error;

export const selectTweets = (state: RootState) => selectTweetsState(state).tweets as Tweet[];

export const selectAllTweets = (state: RootState) => selectTweetsState(state).feed as TweetWithAuthor[];

export const selectTweetLoading = (state: RootState): boolean => selectTweetsState(state).isLoading;
