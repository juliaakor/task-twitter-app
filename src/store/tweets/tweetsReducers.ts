import { Reducer } from 'redux';

import { Tweet } from '@type/models';
import { TweetWithAuthor } from '@type/models/Tweet';

import { TWEET_ACTION_TYPES, TweetActionTypes, TweetsState } from './types';

const initialState: TweetsState = {
  error: null,
  feed: [],
  isLoading: false,
  searchTweets: [],
  tweets: [],
};

export const tweetReducer: Reducer<TweetsState, TweetActionTypes> = (state = initialState, action): TweetsState => {
  switch (action.type) {
    case TWEET_ACTION_TYPES.ADD_TWEET_REQUEST:
    case TWEET_ACTION_TYPES.DELETE_TWEET_REQUEST:
    case TWEET_ACTION_TYPES.TOGGLE_LIKE_REQUEST:
    case TWEET_ACTION_TYPES.FETCH_ALL_TWEETS_REQUEST:
    case TWEET_ACTION_TYPES.SEARCH_TWEETS_BY_USER_REQUEST:
    case TWEET_ACTION_TYPES.SEARCH_TWEETS_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case TWEET_ACTION_TYPES.ADD_TWEET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tweets: [action.payload as Tweet, ...state.tweets],
      };
    case TWEET_ACTION_TYPES.DELETE_TWEET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tweets: state.tweets.filter((tweet) => tweet.id !== action.payload),
      };
    case TWEET_ACTION_TYPES.SEARCH_TWEETS_BY_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tweets: action.payload as Tweet[],
      };
    case TWEET_ACTION_TYPES.FETCH_ALL_TWEETS_SUCCESS:
      return {
        ...state,
        feed: action.payload as TweetWithAuthor[],
        isLoading: false,
      };
    case TWEET_ACTION_TYPES.TOGGLE_LIKE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tweets: state.tweets.map((tweet) =>
          tweet.id === (action.payload as Tweet).id ? { ...tweet, likes: (action.payload as Tweet).likes } : tweet
        ),
      };
    case TWEET_ACTION_TYPES.SEARCH_TWEETS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        searchTweets: action.payload as TweetWithAuthor[],
      };
    case TWEET_ACTION_TYPES.ADD_TWEET_FAIL:
    case TWEET_ACTION_TYPES.DELETE_TWEET_FAIL:
    case TWEET_ACTION_TYPES.TOGGLE_LIKE_FAIL:
    case TWEET_ACTION_TYPES.FETCH_ALL_TWEETS_FAIL:
    case TWEET_ACTION_TYPES.SEARCH_TWEETS_FAIL:
      return {
        ...state,
        error: action.payload as string,
        isLoading: false,
      };
    default:
      return state;
  }
};
