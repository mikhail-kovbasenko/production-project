import { createAsyncThunk, Dispatch } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/providers/StoreProvider';
import { Profile } from '../../types/types';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

interface LoginByUsernameConfig {
  rejectValue: string;
  extra: ThunkExtraArg;
}

export const fetchProfileData = createAsyncThunk<Profile, void, LoginByUsernameConfig>(
  'profile/fetchProfileData',
  async (_, {
    extra,
    rejectWithValue,
  }) => {
    try {
      const response = await extra.api.get<Profile>('profile');

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
