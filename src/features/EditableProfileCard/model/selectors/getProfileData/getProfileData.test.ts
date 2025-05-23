import { StateSchema } from '@/app/providers/StoreProvider';
import { CountryType } from '@/entities/Country';
import { CurrencyType } from '@/entities/Currency';

import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('should return profile', () => {
    const data = {
      username: 'admin',
      age: 24,
      country: CountryType.Russia,
      lastname: 'semenov',
      first: 'oleg',
      city: 'Moscow',
      currency: CurrencyType.EUR,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
