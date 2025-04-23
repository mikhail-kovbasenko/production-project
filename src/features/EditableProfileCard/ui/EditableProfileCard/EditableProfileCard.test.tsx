import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { CountryType } from '@/entities/Country';
import { CurrencyType } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { componentRender } from '@/shared/config/tests';
import { $api } from '@/shared/api/api';
import EditableProfileCard from './EditableProfileCard';
import { profileReducer } from '../../model/slice/profileSlice';

const profile: Profile = {
  id: '1',
  first: 'admin',
  lastname: 'admin',
  age: 22,
  currency: CurrencyType.USD,
  country: CountryType.Armeina,
  city: 'Kazan',
  username: 'admin221321',
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: {
        id: '1',
        username: 'admin',
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('features/EditableProfileCard', () => {
  test('Режим "только для чтения" должен переключаться', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
  });
  test('При отмене значения обнуляются', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
    await userEvent.clear(screen.getByTestId('ProfileCard.LastName'));

    await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'blabla');
    await userEvent.type(screen.getByTestId('ProfileCard.LastName'), 'blabla');

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('blabla');
    expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('blabla');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('admin');
    expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('admin');
  });
  test('Должна появиться ошибка', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
  });
  test('Если ошибок валидации нет, то на сервер должен уйти PUT запрос', async () => {
    const mockPutReq = jest.spyOn($api, 'put');
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(mockPutReq).toHaveBeenCalled();
  });
});
