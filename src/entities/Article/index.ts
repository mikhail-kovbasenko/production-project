export { default as ArticleList } from './ui/ArticleList/ArticleList';

export { default as ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export {
  ArticleBlockType,
  ArticleSortField, ArticleType,
  ArticleView,
} from './model/types/types';
export { getArticleDetailsData } from './model/selectors/getArticleDetails';
export { articleDetailsReducer } from './model/slice/articleDetailsSlice';
export { ArticleTypeTabs } from './ui/ArticleTypeTabs';

export type { Article } from './model/types/types';

export type { ArticleDetailsSchema } from './model/types/schema';
