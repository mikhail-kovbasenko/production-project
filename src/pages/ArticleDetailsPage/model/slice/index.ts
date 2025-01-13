import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types/types';
import { articleDetailsRecommendationsReducer } from './articleDetailsRecommendationsSlice';
import { articleDetailCommentReducers } from './articleDetailsCommentSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsRecommendationsReducer,
  comments: articleDetailCommentReducers,
});
