import { userActions, userReducer } from './userSlice';
import { UserSchema } from '../types/user';

describe('userSlice', () => {
  test('test set auth data', () => {
    const authData = {
      id: '1',
      username: 'Tester',
      avatar: '',
    };

    const state: DeepPartial<UserSchema> = {
      authData: undefined,
    };
    expect(
      userReducer(
        state as UserSchema,
        userActions.setAuthData(authData),
      ),
    ).toEqual({ authData });
  });
});
