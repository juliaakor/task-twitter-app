import { createAction } from '@store/types';
import { Tweet } from '@type/models';
import { TweetWithAuthor } from '@type/models/Tweet';

import { TWEET_ACTION_TYPES } from './types';

export const addTweetRequest = (tweet: Partial<Tweet>, userId: string) =>
  createAction(TWEET_ACTION_TYPES.ADD_TWEET_REQUEST, { tweet, userId });
export const addTweetSuccess = (tweet: Tweet) => createAction(TWEET_ACTION_TYPES.ADD_TWEET_SUCCESS, tweet);
export const addTweetFail = (error: string) => createAction(TWEET_ACTION_TYPES.ADD_TWEET_FAIL, error);

export const deleteTweetRequest = (tweetId: string) => createAction(TWEET_ACTION_TYPES.DELETE_TWEET_REQUEST, tweetId);
export const deleteTweetSuccess = (tweetId: string) => createAction(TWEET_ACTION_TYPES.DELETE_TWEET_SUCCESS, tweetId);
export const deleteTweetFail = (error: string) => createAction(TWEET_ACTION_TYPES.DELETE_TWEET_FAIL, error);

export const toggleLikeRequest = (tweetId: string, userId: string) =>
  createAction(TWEET_ACTION_TYPES.TOGGLE_LIKE_REQUEST, { tweetId, userId });
export const toggleLikeSuccess = (tweet: Tweet) => createAction(TWEET_ACTION_TYPES.TOGGLE_LIKE_SUCCESS, tweet);
export const toggleLikeFail = (error: string) => createAction(TWEET_ACTION_TYPES.TOGGLE_LIKE_FAIL, error);

export const fetchAllTweetsRequest = () => createAction(TWEET_ACTION_TYPES.FETCH_ALL_TWEETS_REQUEST);
export const fetchAllTweetsSuccess = (tweets: TweetWithAuthor[]) =>
  createAction(TWEET_ACTION_TYPES.FETCH_ALL_TWEETS_SUCCESS, tweets);
export const fetchAllTweetsFail = (error: string) => createAction(TWEET_ACTION_TYPES.FETCH_ALL_TWEETS_FAIL, error);

export const searchTweetsByUserRequest = (userId: string) =>
  createAction(TWEET_ACTION_TYPES.SEARCH_TWEETS_BY_USER_REQUEST, userId);
export const searchTweetsByUserSuccess = (tweets: Tweet[]) =>
  createAction(TWEET_ACTION_TYPES.SEARCH_TWEETS_BY_USER_SUCCESS, tweets);
export const searchTweetsByUserFail = (error: string) =>
  createAction(TWEET_ACTION_TYPES.SEARCH_TWEETS_BY_USER_FAIL, error);
