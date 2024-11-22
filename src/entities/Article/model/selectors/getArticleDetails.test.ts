import { StateSchema } from '../../../../app/providers/StoreProvider';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsLoading } from './getArticleDetails';

describe('getArticleDetails', () => {
  test('should return data', () => {
    const data = {
      id: '1',
      title: 'subtitle',
    };
    const state: DeepPartial<StateSchema> = {
      articleDetails: { data },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });
  test('should return empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });
  test('should return loading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };
    expect(getArticleDetailsLoading(state as StateSchema)).toEqual(true);
  });
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: { error: 'error' },
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  });
});
