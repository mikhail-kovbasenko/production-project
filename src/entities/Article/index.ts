import ArticleDetails from './ui/ArticleDetails/ArticleDetails';
import {
  ArticleBlockType,
  ArticleSortField, ArticleType, ArticleView,
} from './model/types/types';
import { getArticleDetailsData } from './model/selectors/getArticleDetails';
import ArticleList from './ui/ArticleList/ArticleList';
import { articleDetailsReducer } from './model/slice/articleDetailsSlice';
import { ArticleTypeTabs } from './ui/ArticleTypeTabs';

import type { Article } from './model/types/types';

import type { ArticleDetailsSchema } from './model/types/schema';

export {
  ArticleDetails,
  getArticleDetailsData,
  ArticleView,
  ArticleList,
  ArticleSortField,
  ArticleType,
  articleDetailsReducer,
  ArticleTypeTabs,
  ArticleBlockType,
  Article,
  ArticleDetailsSchema,
};
