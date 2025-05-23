import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
});

export const { actions: commentActions, reducer: commentReducer } = commentSlice;
