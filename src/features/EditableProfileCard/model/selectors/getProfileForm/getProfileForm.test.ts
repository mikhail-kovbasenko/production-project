import { StateSchema } from '@/app/providers/StoreProvider';

import { CountryType } from '@/entities/Country';
import { CurrencyType } from '@/entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  test('should return form', () => {
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
        form: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
