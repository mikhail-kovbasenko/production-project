import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import AboutPageIcon from '@/shared/assets/icons/about.svg';
import MainPageIcon from '@/shared/assets/icons/home.svg';
import ProfilePageIcon from '@/shared/assets/icons/profile.svg';
import ArticlePageIcon from '@/shared/assets/icons/article.svg';
import { SidebarItemType } from '../../types/types';
import { RoutePath } from '@/shared/const/router';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
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
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePath.profile + userData.id,
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
      );
    }

    return sidebarItemsList;
  },
);
