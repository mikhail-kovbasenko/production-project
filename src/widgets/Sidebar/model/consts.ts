import AboutPageIcon from 'shared/assets/icons/about.svg';
import MainPageIcon from 'shared/assets/icons/home.svg';
import ProfilePageIcon from 'shared/assets/icons/profile.svg';
import ArticlePageIcon from 'shared/assets/icons/article.svg';
import { RoutePath } from 'shared/config/router/config';
import { SidebarItemType } from './types';

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
  {
    path: RoutePath.articles,
    Icon: ArticlePageIcon,
    text: 'article',
    authOnly: true,
  },
];
