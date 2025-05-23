import { combineReducers } from '@reduxjs/toolkit';

import { articleDetailCommentReducers } from './articleDetailsCommentSlice';
import { articleDetailsRecommendationsReducer } from './articleDetailsRecommendationsSlice';
import { ArticleDetailsPageSchema } from '../types/types';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsRecommendationsReducer,
  comments: articleDetailCommentReducers,
});
