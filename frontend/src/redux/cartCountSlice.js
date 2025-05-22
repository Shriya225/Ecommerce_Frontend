import { createSlice } from '@reduxjs/toolkit';

const cartCountSlice = createSlice({
  name: 'cartCount',
  initialState: {
    count: 0,
  },
  reducers: {
    incrementCartCount: (state) => {
      state.count += 1;  // Fixed here
    },
    setCartCount: (state, action) => {
      state.count = action.payload; 
    },
  },
});

export const { incrementCartCount, setCartCount } = cartCountSlice.actions;
export default cartCountSlice.reducer;
