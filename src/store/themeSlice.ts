import { createSlice } from '@reduxjs/toolkit';
import type { Theme } from '../types';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'dark' as Theme,
  reducers: {
    toggle: (state) => (state === 'dark' ? 'light' : 'dark'),
  },
});

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;
