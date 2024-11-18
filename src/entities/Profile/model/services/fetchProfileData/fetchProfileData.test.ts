import axios from 'axios';
// import { Dispatch } from 'react';
// import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
// import { AnyAction } from '@reduxjs/toolkit';
import { TestAsyncThunk } from 'shared/config/tests';
import { fetchProfileData } from './fetchProfileData';
import { CountryType } from '../../../../Country';
import { CurrencyType } from '../../../../Currency';

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

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });
  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
