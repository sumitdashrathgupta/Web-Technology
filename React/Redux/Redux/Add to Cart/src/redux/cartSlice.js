import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existing = state.find((p) => p.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
