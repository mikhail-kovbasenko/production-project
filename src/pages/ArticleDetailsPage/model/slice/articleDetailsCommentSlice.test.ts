import { fetchCommentsArticleById } from '../services/fetchCommentByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentSchema } from '../types/types';
import { articleDetailCommentReducers } from './articleDetailsCommentSlice';

const comments = [
  {
    id: '1',
    user: {
      id: '1',
      username: 'Admin',
      avatar: '',
    },
    text: 'Hello',
    articleId: '2',
  },
];
describe('articleDetailsCommentSlice', () => {
  test('article details fetch success', () => {
    const state: DeepPartial<ArticleDetailsCommentSchema> = {
      isLoading: true,
      ids: [],
      entities: {},
    };
    expect(
      articleDetailCommentReducers(
        state as ArticleDetailsCommentSchema,
        fetchCommentsArticleById.fulfilled(comments, '', ''),
      ),
    ).toEqual({
      isLoading: false,
      ids: ['1'],
      entities: {
        1: {
          id: '1',
          text: 'Hello',
          articleId: '2',
          user: {
            id: '1',
            username: 'Admin',
            avatar: '',
          },
        },
      },
    });
  });
});
