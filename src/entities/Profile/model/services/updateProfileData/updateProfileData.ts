import { createAsyncThunk, Dispatch } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from 'app/providers/StoreProvider';
import { Profile } from '../../types/types';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

interface LoginByUsernameConfig {
  rejectValue: string;
  extra: ThunkExtraArg;
  state: StateSchema
}

export const updateProfileData = createAsyncThunk<Profile, void, LoginByUsernameConfig>(
  'profile/updateProfileData',
  async (_, {
    extra,
    rejectWithValue,
    getState,
  }) => {
    const formData = getProfileForm(getState());
    try {
      const response = await extra.api.put<Profile>('profile', formData);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
