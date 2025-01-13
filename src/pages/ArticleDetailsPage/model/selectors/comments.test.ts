import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleCommentsError, getArticleCommentsLoading } from './comments';

describe('comments', () => {
  test('should return loading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        comments: { isLoading: true },
      },
    };
    expect(getArticleCommentsLoading(state as StateSchema)).toEqual(true);
  });
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        comments: { error: 'Error 1' },
      },
    };
    expect(getArticleCommentsError(state as StateSchema)).toEqual('Error 1');
  });
});
