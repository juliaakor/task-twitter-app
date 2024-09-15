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
  const { feed, isLoading, tweets } = useAppSelector(selectTweetsState);

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

  return {
    addTweet,
    deleteTweet,
    feed,
    getAllTweets,
    getUserTweets,
    isLoading,
    toggleLike,
    tweetsByUser: tweets,
  };
};
