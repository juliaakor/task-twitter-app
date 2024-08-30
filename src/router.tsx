import { ROUTES } from '@constants/routes';
import { ErrorPage, FeedPage, NotFoundPage, ProfilePage, SigninPage, SignupPage } from '@pages/index';

export const router = [
  {
    Component: NotFoundPage,
    path: ROUTES.NOT_FOUND,
  },
  {
    Component: FeedPage,
    path: ROUTES.FEED,
  },
  {
    Component: FeedPage,
    path: ROUTES.HOME,
  },
  {
    Component: ProfilePage,
    path: ROUTES.PROFILE,
  },
  {
    Component: ErrorPage,
    path: ROUTES.ERROR_OCCURRED,
  },
  {
    Component: SigninPage,
    path: ROUTES.SIGN_IN,
  },
  {
    Component: SignupPage,
    path: ROUTES.SIGN_UP,
  },
];
