import { CountryType } from '@/entities/Country';
import { CurrencyType } from '@/entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/types';
import { ValidateProfileError } from '../consts/consts';
import { profileActions, profileReducer } from './profileSlice';

const data = {
  id: '1',
  username: 'admin',
  age: 24,
  country: CountryType.Russia,
  lastname: 'semenov',
  first: 'oleg',
  city: 'Moscow',
  currency: CurrencyType.EUR,
};

describe('profileSlice', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.setReadonly(true),
      ),
    ).toEqual({ readonly: true });
  });
  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data, form: { username: '' }, readonly: false,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.cancelEdit(),
      ),
    ).toEqual({
      readonly: true, data, form: data,
    });
  });
  test('test update', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '' } };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({
          username: 'admin',
        }),
      ),
    ).toEqual({
      form: {
        username: 'admin',
      },
    });
  });
  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.pending,
      ),
    ).toEqual({
      isLoading: true,
      validateError: undefined,
    });
  });
  test('test update profile service fullfiled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, '1', ''),
      ),
    ).toEqual({
      isLoading: false,
      validateError: undefined,
      validateErrors: undefined,
      readonly: true,
      form: data,
      data,
    });
  });
});
