import { EntityState } from '@reduxjs/toolkit';

import { Article } from '@/entities/Article';
import { Comment } from '@/entities/Comment';

export interface ArticleDetailsCommentSchema extends EntityState<Comment> {
  isLoading?: boolean;
  error?: string;
}

export interface ArticleDetailsRecommendationsSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
}

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentSchema,
  recommendations: ArticleDetailsRecommendationsSchema
}
