import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { ThunkExtraArg } from 'app/providers/StoreProvider';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

interface LoginByUsernameConfig {
  rejectValue: string;
  extra: ThunkExtraArg
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, LoginByUsernameConfig>(
  'login/loginByUsername',
  async (authData, {
    extra,
    dispatch,
    rejectWithValue,
  }) => {
    try {
      const response = await extra.api.post<User>('login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      // extra.api.defaults.headers.common.Authorization = USER_LOCALSTORAGE_KEY;
      extra.navigate?.('/about');

      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
