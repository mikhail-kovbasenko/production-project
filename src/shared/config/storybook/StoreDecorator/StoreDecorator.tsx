import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailsReducer } from '@/entities/Article';
import { addCommentFormReducer } from '@/features/AddCommentForm';
import { loginReducer } from '@/features/AuthByUsername';
import { scrollPositionSaveReducers } from '@/features/ScrollPositionSave';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage';
import { articlesPageReducers } from '@/pages/ArticlesPage';
import { profileReducer } from '@/features/EditableProfileCard';
import { ReducersList } from '../../../lib/components';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
  articlesPage: articlesPageReducers,
  scroll: scrollPositionSaveReducers,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
