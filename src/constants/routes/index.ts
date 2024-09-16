import { BookmarksIcon } from '@assets/icons/bookmarksIcon';
import { ExploreIcon } from '@assets/icons/exploreIcon';
import { HomeIcon } from '@assets/icons/homeIcon';
import { ListsIcons } from '@assets/icons/listsIcon';
import { MessagesIcon } from '@assets/icons/messagesIcon';
import { MoreIcon } from '@assets/icons/moreIcon';
import { NotificationIcon } from '@assets/icons/notificationIcon';
import { ProfileIcon } from '@assets/icons/profileIcon';
import { IconProps } from '@assets/types';

export const ROUTES = {
  ERROR_OCCURRED: '/error-occurred',
  FEED: '/feed',
  HOME: '/',
  NOT_FOUND: '*',
  PROFILE: '/profile/:id',
  SIGN_IN: '/signin',
  SIGN_UP: '/signup',
  TWEET: '/tweet/:id',
};

export interface NavItem {
  Icon: React.ComponentType<IconProps>;
  label: string;
  link: string;
}

export const NAV_ROUTES: NavItem[] = [
  { Icon: HomeIcon, label: 'Home', link: ROUTES.HOME },
  { Icon: ExploreIcon, label: 'Explore', link: ROUTES.FEED },
  { Icon: NotificationIcon, label: 'Notifications', link: ROUTES.NOT_FOUND },
  { Icon: MessagesIcon, label: 'Messages', link: ROUTES.NOT_FOUND },
  { Icon: BookmarksIcon, label: 'Bookmarks', link: ROUTES.NOT_FOUND },
  { Icon: ListsIcons, label: 'Lists', link: ROUTES.NOT_FOUND },
  { Icon: ProfileIcon, label: 'Profile', link: ROUTES.PROFILE },
  { Icon: MoreIcon, label: 'More', link: ROUTES.NOT_FOUND },
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
