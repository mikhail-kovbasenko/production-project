import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { Profile, ValidateProfileError } from '../../types/types';
import { validateProfileData } from '../validateProfileData/validateProfileData';

// interface LoginByUsernameProps {
//   username: string;
//   password: string;
// }

// interface LoginByUsernameConfig {
//   rejectValue: string;
//   extra: ThunkExtraArg;
//   state: StateSchema
// }

export const updateProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkConfig<ValidateProfileError[]>
  >(
    'profile/updateProfileData',
    async (profileId, {
      extra,
      rejectWithValue,
      getState,
    }) => {
      const formData = getProfileForm(getState());

      const errors = validateProfileData(formData);

      if (errors.length) {
        return rejectWithValue(errors);
      }

      try {
        const response = await extra.api.put<Profile>(`profile/${profileId}`, formData);

        if (!response.data) {
          throw new Error();
        }

        return response.data;
      } catch (error) {
        return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
      }
    },
  );
