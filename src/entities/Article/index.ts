import { getArticleDetailsData } from './model/selectors/getArticleDetails';
import { articleDetailsReducer } from './model/slice/articleDetailsSlice';
import type { ArticleDetailsSchema } from './model/types/schema';
import {
  ArticleBlockType,
  ArticleSortField, ArticleType, ArticleView,
} from './model/types/types';
import type { Article } from './model/types/types';
import ArticleDetails from './ui/ArticleDetails/ArticleDetails';
import ArticleList from './ui/ArticleList/ArticleList';
import { ArticleTypeTabs } from './ui/ArticleTypeTabs';

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
