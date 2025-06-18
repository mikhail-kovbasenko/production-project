import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '@/entities/User';
import AboutPageIcon from '@/shared/assets/icons/about.svg';
import ArticlePageIcon from '@/shared/assets/icons/article.svg';
import MainPageIcon from '@/shared/assets/icons/home.svg';
import ProfilePageIcon from '@/shared/assets/icons/profile.svg';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';

import { SidebarItemType } from '../../types/types';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: getRouteMain(),
        Icon: MainPageIcon,
        text: 'main page',
      },
      {
        path: getRouteAbout(),
        Icon: AboutPageIcon,
        text: 'about page',
      },
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: getRouteProfile(userData.id),
          Icon: ProfilePageIcon,
          text: 'profile',
          authOnly: true,
        },
        {
          path: getRouteArticles(),
          Icon: ArticlePageIcon,
          text: 'article',
          authOnly: true,
        },
      );
    }

    return sidebarItemsList;
  },
);
