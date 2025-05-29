import { createSlice } from '@reduxjs/toolkit';
const cartTotalSlice = createSlice({
  name: 'cartTotal',
  initialState: {
    value: 0,
  },
  reducers: {
    setCartTotal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCartTotal } = cartTotalSlice.actions;
export default cartTotalSlice.reducer;
