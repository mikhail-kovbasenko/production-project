import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { ArticleDetailsSchema } from '@/entities/Article';
import { UserSchema } from '@/entities/User';
import { AddCommentFormSchema } from '@/features/AddCommentForm';
import { LoginSchema } from '@/features/AuthByUsername';
import { ProfileSchema } from '@/features/EditableProfileCard';
import { ScrollPositionSaveSchema } from '@/features/ScrollPositionSave';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { ArticlesPageSchema } from '@/pages/ArticlesPage';
import { rtkApi } from '@/shared/api/rtk';

export interface StateSchema {
  user: UserSchema;
  loginForm?: LoginSchema;
  profile?: ProfileSchema,
  articleDetails?: ArticleDetailsSchema,
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,
  // articleDetailsComments?: ArticleDetailsCommentSchema,
  // articleDetailsRecommendations?: ArticleDetailsRecommendationsSchema,
  addCommentForm?: AddCommentFormSchema,
  articlesPage?: ArticlesPageSchema,
  scroll: ScrollPositionSaveSchema,
  articleDetailsPage?: ArticleDetailsPageSchema
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>,
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance,
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema
}
