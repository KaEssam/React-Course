import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { id: 1, name: 'Karim Essam', role: 'Admin' },
  reducers: {
    logout: () => ({ id: 0, name: 'GUEST', role: '' }),
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
