import { articlesPageReducers } from './model/slice/articlesPageSlice';
import { ArticlesAsyncPage as ArticlesPage } from './ui/ArticlesPage.async';

export type { ArticlesPageSchema } from './model/types/types';

export { ArticlesPage, articlesPageReducers };
