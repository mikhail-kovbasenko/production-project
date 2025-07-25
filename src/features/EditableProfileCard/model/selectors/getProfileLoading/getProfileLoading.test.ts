import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileLoading } from './getProfileLoading';

describe('getProfileLoading', () => {
  test('should return loading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileLoading(state as StateSchema)).toEqual(true);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileLoading(state as StateSchema)).toEqual(undefined);
  });
});
