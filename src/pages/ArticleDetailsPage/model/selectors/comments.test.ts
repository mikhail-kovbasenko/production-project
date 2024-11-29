import { StateSchema } from '../../../../app/providers/StoreProvider';
import { getArticleCommentsError, getArticleCommentsLoading } from './comments';

describe('comments', () => {
  test('should return loading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        isLoading: true,
      },
    };
    expect(getArticleCommentsLoading(state as StateSchema)).toEqual(true);
  });
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        error: 'Error 1',
      },
    };
    expect(getArticleCommentsError(state as StateSchema)).toEqual('Error 1');
  });
});
