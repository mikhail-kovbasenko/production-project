import { getUserAuthData } from './getUserAuthData';
import { StateSchema } from '../../../../../app/providers/StoreProvider';

describe('getUserAuthData', () => {
  test('should return auth data', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: '1',
          username: 'Tester',
          avatar: '',
        },
      },
    };
    expect(getUserAuthData(state as StateSchema)).toEqual(
      state.user?.authData,
    );
  });
  test('should return empty state', () => {
    const state: DeepPartial<StateSchema> = {
      user: {},
    };

    expect(getUserAuthData(state as StateSchema)).toEqual(
      undefined,
    );
  });
});
