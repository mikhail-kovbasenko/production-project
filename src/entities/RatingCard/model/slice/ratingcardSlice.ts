import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {};

export const ratingcardSlice = createSlice({
  name: 'ratingcard',
  initialState,
  reducers: {},
});

export const { actions: ratingcardActions, reducer: ratingcardReducer } = ratingcardSlice;
