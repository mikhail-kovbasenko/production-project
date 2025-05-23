import { CountryType } from '@/entities/Country';
import { CurrencyType } from '@/entities/Currency';
import { TestAsyncThunk } from '@/shared/config/tests';

import { updateProfileData } from './updateProfileData';
import { ValidateProfileError } from '../../consts/consts';

const data = {
  username: 'admin',
  age: 24,
  country: CountryType.Russia,
  lastname: 'semenov',
  first: 'oleg',
  city: 'Moscow',
  currency: CurrencyType.EUR,
  id: '1',
};

describe('updateProfileData', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: data },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({
      data,
    }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });
  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: data },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.SERVER_ERROR,
    ]);
  });
  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: { ...data, lastname: '' } },
    });

    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });
});
