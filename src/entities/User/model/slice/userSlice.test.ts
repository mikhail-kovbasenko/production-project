import { UserSchema } from '../types/user';
import { userActions, userReducer } from './userSlice';

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
