export const ROUTES = {
  ERROR_OCCURRED: '/error-occurred',
  FEED: 'feed',
  HOME: '/',
  NOT_FOUND: '*',
  PROFILE: '/profile/:id',
  SIGN_IN: 'signin',
  SIGN_UP: 'signup',
};

export const NAV_ROUTES = [
  ['Home', ROUTES.HOME],
  ['Explore', ROUTES.NOT_FOUND],
  ['Notifications', ROUTES.NOT_FOUND],
  ['Messages', ROUTES.NOT_FOUND],
  ['Bookmarks', ROUTES.NOT_FOUND],
  ['Lists', ROUTES.NOT_FOUND],
  ['Profile', ROUTES.PROFILE],
  ['More', ROUTES.FEED],
];
