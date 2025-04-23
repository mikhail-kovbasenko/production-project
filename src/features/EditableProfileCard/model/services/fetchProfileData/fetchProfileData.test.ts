import { TestAsyncThunk } from '@/shared/config/tests';
import { CurrencyType } from '@/entities/Currency';
import { CountryType } from '@/entities/Country';
import { fetchProfileData } from './fetchProfileData';

const data = {
  username: 'admin',
  age: 24,
  country: CountryType.Russia,
  lastname: 'semenov',
  first: 'oleg',
  city: 'Moscow',
  currency: CurrencyType.EUR,
};

describe('fetchProfileData', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({
      data,
    }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });
  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
