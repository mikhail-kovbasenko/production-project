import AboutPageIcon from 'shared/assets/icons/about.svg';
import MainPageIcon from 'shared/assets/icons/home.svg';
import ProfilePageIcon from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/router/config';
import { SidebarItemType } from './types';
import i18n from '../../../shared/config/i18n/i18n';

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainPageIcon,
    text: 'main page',
  },
  {
    path: RoutePath.about,
    Icon: AboutPageIcon,
    text: 'about page',
  },
  {
    path: RoutePath.profile,
    Icon: ProfilePageIcon,
    text: 'profile',
    authOnly: true,
  },
];
