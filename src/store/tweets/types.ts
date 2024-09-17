import { TweetWithAuthor } from '@/types/models/Tweet';
import { BaseAction } from '@store/types';
import { Tweet } from '@type/models';

export interface TweetsState {
  tweets: Tweet[];
  error: string | null;
  isLoading: boolean;
  searchTweets: TweetWithAuthor[];
  feed: TweetWithAuthor[];
  activeTweet: TweetWithAuthor | null;
}

export const TWEET_ACTION_TYPES: Record<string, string> = {
  ADD_TWEET_FAIL: 'ADD_TWEET_FAIL',
  ADD_TWEET_REQUEST: 'ADD_TWEET_REQUEST',
  ADD_TWEET_SUCCESS: 'ADD_TWEET_SUCCESS',

  DELETE_TWEET_FAIL: 'DELETE_TWEET_FAIL',
  DELETE_TWEET_REQUEST: 'DELETE_TWEET_REQUEST',
  DELETE_TWEET_SUCCESS: 'DELETE_TWEET_SUCCESS',

  FETCH_ALL_TWEETS_FAIL: 'FETCH_ALL_TWEETS_FAIL',
  FETCH_ALL_TWEETS_REQUEST: 'FETCH_ALL_TWEETS_REQUEST',
  FETCH_ALL_TWEETS_SUCCESS: 'FETCH_ALL_TWEETS_SUCCESS',

  SEARCH_TWEET_BY_ID_FAIL: 'SEARCH_TWEET_BY_ID_FAIL',
  SEARCH_TWEET_BY_ID_REQUEST: 'SEARCH_TWEET_BY_ID_REQUEST',
  SEARCH_TWEET_BY_ID_SUCCESS: 'SEARCH_TWEET_BY_ID_SUCCESS',

  SEARCH_TWEETS_BY_USER_FAIL: 'SEARCH_TWEETS_BY_USER_FAIL',
  SEARCH_TWEETS_BY_USER_REQUEST: 'SEARCH_TWEETS_BY_USER_REQUEST',
  SEARCH_TWEETS_BY_USER_SUCCESS: 'SEARCH_TWEETS_BY_USER_SUCCESS',

  SEARCH_TWEETS_FAIL: 'SEARCH_TWEETS_FAIL',
  SEARCH_TWEETS_REQUEST: 'SEARCH_TWEETS_REQUEST',
  SEARCH_TWEETS_SUCCESS: 'SEARCH_TWEETS_SUCCESS',

  TOGGLE_LIKE_FAIL: 'TOGGLE_LIKE_FAIL',
  TOGGLE_LIKE_REQUEST: 'TOGGLE_LIKE_REQUEST',
  TOGGLE_LIKE_SUCCESS: 'TOGGLE_LIKE_SUCCESS',
};

export interface AddNewTweetProps {
  tweet: Partial<Tweet>;
  userId: string;
}

export interface ToggleLikeProps {
  tweetId: string;
  userId: string;
}

export interface SearchTweetsProps {
  query: string;
  userId: string;
}

interface AddTweetFailAction extends BaseAction<typeof TWEET_ACTION_TYPES.ADD_TWEET_FAIL, string> {}
interface AddTweetRequestAction extends BaseAction<typeof TWEET_ACTION_TYPES.ADD_TWEET_REQUEST, AddNewTweetProps> {}
interface AddTweetSuccessAction extends BaseAction<typeof TWEET_ACTION_TYPES.ADD_TWEET_SUCCESS, Tweet> {}

interface DeleteTweetFailAction extends BaseAction<typeof TWEET_ACTION_TYPES.DELETE_TWEET_FAIL, string> {}
interface DeleteTweetRequestAction extends BaseAction<typeof TWEET_ACTION_TYPES.DELETE_TWEET_REQUEST, string> {}
interface DeleteTweetSuccessAction extends BaseAction<typeof TWEET_ACTION_TYPES.DELETE_TWEET_SUCCESS, string> {}

interface FetchAllTweetsFailAction extends BaseAction<typeof TWEET_ACTION_TYPES.FETCH_ALL_TWEETS_FAIL, string> {}
interface FetchAllTweetsRequestAction extends BaseAction<typeof TWEET_ACTION_TYPES.FETCH_ALL_TWEETS_REQUEST> {}
interface FetchAllTweetsSuccessAction extends BaseAction<typeof TWEET_ACTION_TYPES.FETCH_ALL_TWEETS_SUCCESS, Tweet[]> {}

interface SearchTweetsByUserFailAction
  extends BaseAction<typeof TWEET_ACTION_TYPES.SEARCH_TWEETS_BY_USER_FAIL, string> {}
interface SearchTweetsByUserRequestAction
  extends BaseAction<typeof TWEET_ACTION_TYPES.SEARCH_TWEETS_BY_USER_REQUEST, string> {}
interface SearchTweetsByUserSuccessAction
  extends BaseAction<typeof TWEET_ACTION_TYPES.SEARCH_TWEETS_BY_USER_SUCCESS, Tweet[]> {}

interface SearchTweetByIdFailAction extends BaseAction<typeof TWEET_ACTION_TYPES.SEARCH_TWEET_BY_ID_FAIL, string> {}
interface SearchTweetByIdRequestAction
  extends BaseAction<typeof TWEET_ACTION_TYPES.SEARCH_TWEET_BY_ID_REQUEST, string> {}
interface SearchTweetByIdSuccessAction
  extends BaseAction<typeof TWEET_ACTION_TYPES.SEARCH_TWEET_BY_ID_SUCCESS, TweetWithAuthor> {}

interface ToggleLikeFailAction extends BaseAction<typeof TWEET_ACTION_TYPES.TOGGLE_LIKE_FAIL, string> {}
interface ToggleLikeRequestAction extends BaseAction<typeof TWEET_ACTION_TYPES.TOGGLE_LIKE_REQUEST, ToggleLikeProps> {}
interface ToggleLikeSuccessAction extends BaseAction<typeof TWEET_ACTION_TYPES.TOGGLE_LIKE_SUCCESS, Tweet> {}

interface SearchTweetsRequestAction
  extends BaseAction<typeof TWEET_ACTION_TYPES.SEARCH_TWEETS_REQUEST, SearchTweetsProps> {}
interface SearchTweetsSuccessAction
  extends BaseAction<typeof TWEET_ACTION_TYPES.SEARCH_TWEETS_SUCCESS, TweetWithAuthor[]> {}
interface SearchTweetsFailAction extends BaseAction<typeof TWEET_ACTION_TYPES.SEARCH_TWEETS_FAIL, string> {}

export type TweetActionTypes =
  | AddTweetFailAction
  | AddTweetRequestAction
  | AddTweetSuccessAction
  | DeleteTweetFailAction
  | DeleteTweetRequestAction
  | DeleteTweetSuccessAction
  | FetchAllTweetsFailAction
  | FetchAllTweetsRequestAction
  | FetchAllTweetsSuccessAction
  | ToggleLikeFailAction
  | ToggleLikeRequestAction
  | ToggleLikeSuccessAction
  | SearchTweetsByUserFailAction
  | SearchTweetsByUserRequestAction
  | SearchTweetsByUserSuccessAction
  | SearchTweetsRequestAction
  | SearchTweetsSuccessAction
  | SearchTweetsFailAction
  | SearchTweetByIdFailAction
  | SearchTweetByIdRequestAction
  | SearchTweetByIdSuccessAction;
