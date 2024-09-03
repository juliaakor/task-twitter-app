import { ErrorPage } from '@pages/Error';
import { FeedPage } from '@pages/Feed';
import * as index from '@pages/index';
import { NotFoundPage } from '@pages/NotFound';
import { ProfilePage } from '@pages/Profile';
import { SigninPage } from '@pages/Signin';
import { SignupPage } from '@pages/Signup';

describe('pages folder index file exports', () => {
  it('should export ErrorPage from index', () => {
    expect(index.ErrorPage).toBe(ErrorPage);
  });

  it('should export FeedPage from index', () => {
    expect(index.FeedPage).toBe(FeedPage);
  });

  it('should export NotFoundPage from index', () => {
    expect(index.NotFoundPage).toBe(NotFoundPage);
  });

  it('should export ProfilePage from index', () => {
    expect(index.ProfilePage).toBe(ProfilePage);
  });

  it('should export SigninPage from index', () => {
    expect(index.SigninPage).toBe(SigninPage);
  });

  it('should export SignupPage from index', () => {
    expect(index.SignupPage).toBe(SignupPage);
  });
});
