import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  accessToken: localStorage.getItem('accessToken') || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      localStorage.setItem('accessToken', action.payload);
    },
    logout: (state) => {
      state.accessToken = null;
      localStorage.removeItem('accessToken');
    },
  },
});

export const { setAccessToken, logout } = authSlice.actions;
export default authSlice.reducer;
