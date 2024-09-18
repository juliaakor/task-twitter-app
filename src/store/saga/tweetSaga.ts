import { call, put, takeLatest } from 'redux-saga/effects';

import { TweetRepository } from '@repositories/TweetRepository';
import {
  addTweetSuccess,
  addTweetFail,
  deleteTweetSuccess,
  deleteTweetFail,
  addTweetRequest,
  deleteTweetRequest,
  toggleLikeSuccess,
  toggleLikeFail,
  toggleLikeRequest,
  searchTweetsByUserFail,
  searchTweetsByUserRequest,
  searchTweetsByUserSuccess,
  fetchAllTweetsSuccess,
  fetchAllTweetsFail,
  searchTweetsSuccess,
  searchTweetsFail,
  searchTweetsRequest,
  searchTweetByIdRequest,
  searchTweetByIdSuccess,
  searchTweetByIdFail,
  fetchAllTweetsRequest,
} from '@store/tweets/tweetsActions';
import { TWEET_ACTION_TYPES } from '@store/tweets/types';
import { Tweet } from '@type/models';
import { TweetWithAuthor } from '@type/models/Tweet';

const tweetRepository = new TweetRepository();

function* addTweetSaga(action: ReturnType<typeof addTweetRequest>): Generator {
  try {
    yield call([tweetRepository, 'create'], action.payload?.tweet as Partial<Tweet>, action.payload?.userId as string);
    yield put(addTweetSuccess(action.payload?.tweet as Tweet));
    yield put(fetchAllTweetsRequest());
  } catch (error) {
    yield put(addTweetFail('Failed to add tweet'));
  }
}

function* deleteTweetSaga(action: ReturnType<typeof deleteTweetRequest>): Generator {
  try {
    yield call([tweetRepository, 'delete'], action.payload as string);
    yield put(deleteTweetSuccess(action.payload as string));
  } catch (error) {
    yield put(deleteTweetFail('Failed to delete tweet'));
  }
}

function* searchTweetByIdSaga(action: ReturnType<typeof searchTweetByIdRequest>): Generator {
  try {
    const tweet = yield call([tweetRepository, 'findByIdWithAuthor'], action.payload as string);

    yield put(searchTweetByIdSuccess(tweet as TweetWithAuthor));
  } catch (error) {
    yield put(searchTweetByIdFail('Failed to fetch tweets'));
  }
}

function* toggleLikeSaga(action: ReturnType<typeof toggleLikeRequest>): Generator {
  try {
    const tweet = yield call(
      [tweetRepository, 'findOne'],
      (action.payload as { tweetId: string; userId: string }).tweetId
    );

    if (tweet && action.payload) {
      yield call([tweetRepository, 'toggleLike'], action.payload.tweetId, action.payload.userId);
      const updatedTweet = yield call([tweetRepository, 'findOne'], action.payload.tweetId);
      yield put(toggleLikeSuccess(updatedTweet as Tweet));
      yield put(searchTweetByIdRequest(action.payload?.tweetId || ''));
      yield put(fetchAllTweetsRequest());
    } else {
      yield put(toggleLikeFail('Tweet not found'));
    }
  } catch (error) {
    yield put(toggleLikeFail('An error occurred during like toggle'));
  }
}

function* fetchTweetsByUserSaga(action: ReturnType<typeof searchTweetsByUserRequest>): Generator {
  try {
    const tweets = yield call([tweetRepository, 'findByUser'], action.payload as string);

    yield put(searchTweetsByUserSuccess(tweets as Tweet[]));
  } catch (error) {
    yield put(searchTweetsByUserFail('Failed to fetch tweets'));
  }
}

function* fetchAllTweetsSaga(): Generator {
  try {
    const feed = yield call([tweetRepository, 'findAll']);

    yield put(fetchAllTweetsSuccess(feed as TweetWithAuthor[]));
  } catch (error) {
    yield put(fetchAllTweetsFail('Failed to fetch all tweets'));
  }
}

function* searchTweetsSaga(action: ReturnType<typeof searchTweetsRequest>) {
  try {
    const { query, userId } = action.payload as { query: string; userId: string };
    const tweetRepository = new TweetRepository();
    const tweets: TweetWithAuthor[] = yield call([tweetRepository, 'searchTweetsByContentAndUser'], query, userId);
    yield put(searchTweetsSuccess(tweets as TweetWithAuthor[]));
  } catch (error) {
    yield put(searchTweetsFail('Error occured while searching tweets'));
  }
}

export function* tweetSaga() {
  yield takeLatest(TWEET_ACTION_TYPES.ADD_TWEET_REQUEST, addTweetSaga);
  yield takeLatest(TWEET_ACTION_TYPES.DELETE_TWEET_REQUEST, deleteTweetSaga);
  yield takeLatest(TWEET_ACTION_TYPES.TOGGLE_LIKE_REQUEST, toggleLikeSaga);
  yield takeLatest(TWEET_ACTION_TYPES.SEARCH_TWEETS_BY_USER_REQUEST, fetchTweetsByUserSaga);
  yield takeLatest(TWEET_ACTION_TYPES.FETCH_ALL_TWEETS_REQUEST, fetchAllTweetsSaga);
  yield takeLatest(TWEET_ACTION_TYPES.SEARCH_TWEETS_REQUEST, searchTweetsSaga);
  yield takeLatest(TWEET_ACTION_TYPES.SEARCH_TWEET_BY_ID_REQUEST, searchTweetByIdSaga);
}
