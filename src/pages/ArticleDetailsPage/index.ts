import { articleDetailsPageReducer } from './model/slice';
import { ArticleDetailsAsyncPage as ArticleDetailsPage } from './ui/ArticleDetailsPage.async';

export type { ArticleDetailsCommentSchema, ArticleDetailsPageSchema, ArticleDetailsRecommendationsSchema } from './model/types/types';

export {
  ArticleDetailsPage,
  articleDetailsPageReducer,
};
