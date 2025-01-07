import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername';
import { profileReducer } from 'entities/Profile';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { articleDetailCommentReducers }
  from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentSlice';
import { ReducersList } from '../../../lib/components';
import { articlesPageReducers } from '../../../../pages/ArticlesPage/model/slice/articlesPageSlice';
import { scrollPositionSaveReducers } from '../../../../features/ScrollPositionSave';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsComments: articleDetailCommentReducers,
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
