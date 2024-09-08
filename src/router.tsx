import { lazy } from 'react';

import { ROUTES } from '@constants/routes';
import { ErrorPage, NotFoundPage } from '@pages/index';

const FeedPage = lazy(() => import('@pages/Feed').then((module) => ({ default: module.FeedPage })));
const ProfilePage = lazy(() => import('@pages/Profile').then((module) => ({ default: module.ProfilePage })));
const SigninPage = lazy(() => import('@pages/Signin').then((module) => ({ default: module.SigninPage })));
const SignupPage = lazy(() => import('@pages/Signup').then((module) => ({ default: module.SignupPage })));

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
