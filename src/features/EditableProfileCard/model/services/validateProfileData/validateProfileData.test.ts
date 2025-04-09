import { CountryType } from 'entities/Country';
import { CurrencyType } from 'entities/Currency';
import { ValidateProfileError } from '../../consts/consts';
import { validateProfileData } from './validateProfileData';

const data = {
  username: 'admin',
  age: 24,
  country: CountryType.Russia,
  lastname: 'semenov',
  first: 'oleg',
  city: 'Moscow',
  currency: CurrencyType.EUR,
};

describe('validateProfileData', () => {
  test('success', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });
  test('without first and lastname', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });
  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });
  test('incorrect country', async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
  test('incorrect all', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
