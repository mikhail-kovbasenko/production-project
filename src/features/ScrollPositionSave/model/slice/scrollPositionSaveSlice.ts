import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ScrollPositionSaveSchema } from '../types/scrollPositionSaveSchema';

const initialState: ScrollPositionSaveSchema = {
  scroll: {},
};

export const scrollPositionSaveSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setScrollPosition(state, { payload }: PayloadAction<{
      path: string,
      position: number
    }>) {
      state.scroll[payload.path] = payload.position;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  reducer: scrollPositionSaveReducers,
  actions: scrollPositionSaveActions,
} = scrollPositionSaveSlice;
