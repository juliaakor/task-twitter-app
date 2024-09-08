export const ROUTES = {
  ERROR_OCCURRED: '/error-occurred',
  FEED: '/feed',
  HOME: '/',
  NOT_FOUND: '*',
  PROFILE: '/profile/:id',
  SIGN_IN: '/signin',
  SIGN_UP: '/signup',
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

export const FOOTER_ROUTES = [
  { label: 'About', link: '' },
  { label: 'Help Center', link: '' },
  { label: 'Terms of Service', link: '' },
  { label: 'Privacy Policy', link: '' },
  { label: 'Cookie Policy', link: '' },
  { label: 'Ads info', link: '' },
  { label: 'Blog', link: '' },
  { label: 'Status', link: '' },
  { label: 'Carrres', link: '' },
  { label: 'Brand Resources', link: '' },
  { label: 'Advertsing', link: '' },
  { label: 'Marketing', link: '' },
  { label: 'Twitter for Business', link: '' },
  { label: 'Developers', link: '' },
  { label: 'Directory', link: '' },
  { label: 'Settings', link: '' },
];

const EXCLUDED_IN_SHORT_VIEW = ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Imprint', 'Ads info'];

export const SHORT_FOOTER_VIEW = [
  { label: 'Terms of Service', link: '' },
  { label: 'Privacy Policy', link: '' },
  { label: 'Cookie Policy', link: '' },
  { label: 'Imprint', link: '' },
  { label: 'Ads info', link: '' },
  {
    label: 'More...',
    link: null,
    options: FOOTER_ROUTES.reduce(
      (prev, item) => (EXCLUDED_IN_SHORT_VIEW.includes(item.label) ? prev : [...prev, item]),
      [] as typeof FOOTER_ROUTES
    ),
  },
];
