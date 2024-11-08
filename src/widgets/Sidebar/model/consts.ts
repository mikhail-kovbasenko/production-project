import AboutPageIcon from 'shared/assets/icons/about.svg';
import MainPageIcon from 'shared/assets/icons/home.svg';
import ProfilePageIcon from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/router/config';
import { SidebarItemType } from './types';

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainPageIcon,
    text: 'Главная',
  },
  {
    path: RoutePath.about,
    Icon: AboutPageIcon,
    text: 'О нас',
  },
  {
    path: RoutePath.profile,
    Icon: ProfilePageIcon,
    text: 'Профиль',
  },
];
