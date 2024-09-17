import { searchTweetByIdRequest, searchTweetsRequest } from '@/store/tweets/tweetsActions';
import { generateId } from '@lib/auth/generateId';
import { useAppDispatch, useAppSelector } from '@store/index';
import {
  addTweetRequest,
  deleteTweetRequest,
  fetchAllTweetsRequest,
  searchTweetsByUserRequest,
  toggleLikeRequest,
  selectTweetsState,
} from '@store/tweets';
import { Tweet } from '@type/models';

export const useTweets = () => {
  const dispatch = useAppDispatch();
  const { activeTweet, feed, isLoading, searchTweets, tweets } = useAppSelector(selectTweetsState);

  const addTweet = async (tweet: Partial<Tweet>, userId: string) => {
    const tweetPayload = {
      content: tweet.content,
      createdAt: new Date().toISOString(),
      id: await generateId(),
      images: tweet.images,
      isDeleted: false,
      likes: [],
    };

    dispatch(addTweetRequest(tweetPayload, userId));
  };

  const deleteTweet = (tweetId: string) => {
    dispatch(deleteTweetRequest(tweetId));
  };

  const toggleLike = (tweetId: string, userId: string) => {
    dispatch(toggleLikeRequest(tweetId, userId));
  };

  const getUserTweets = (userId: string | undefined) => {
    if (!userId) return;

    dispatch(searchTweetsByUserRequest(userId));
  };

  const getAllTweets = () => {
    dispatch(fetchAllTweetsRequest());
  };

  const searchTweetsByUser = (query: string, userId: string) => {
    dispatch(searchTweetsRequest(query, userId));
  };

  const getTweetById = (tweetId: string | undefined) => {
    if (!tweetId) return;

    dispatch(searchTweetByIdRequest(tweetId));
  };

  return {
    activeTweet,
    addTweet,
    deleteTweet,
    feed,
    getAllTweets,
    getTweetById,
    getUserTweets,
    isLoading,
    searchTweets,
    searchTweetsByUser,
    toggleLike,
    tweetsByUser: tweets,
  };
};
