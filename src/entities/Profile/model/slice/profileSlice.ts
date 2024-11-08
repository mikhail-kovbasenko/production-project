import { createSlice } from '@reduxjs/toolkit';

import { ProfileSchema, Profile } from '../types/types';

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: null,
  data: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const { actions: profileActions, reducer: profileReducer } = profileSlice;
