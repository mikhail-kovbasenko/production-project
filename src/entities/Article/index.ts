import ArticleDetails from './ui/ArticleDetails/ArticleDetails';
import {
  ArticleBlockType,
  ArticleSortField, ArticleType, ArticleView,
} from './model/types/types';
import { getArticleDetailsData } from './model/selectors/getArticleDetails';
import ArticleList from './ui/ArticleList/ArticleList';
import { articleDetailsReducer } from './model/slice/articleDetailsSlice';
import { ArticleTypeTabs } from './ui/ArticleTypeTabs';

export type { ArticleDetailsSchema } from './model/types/schema';

export type { Article } from './model/types/types';

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
};
