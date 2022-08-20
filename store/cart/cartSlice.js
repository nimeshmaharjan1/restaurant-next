const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    resetCart: (state) => {
      state = initialState;
    },
  },
});
export const selectCartItems = (state) => state.cartStore.cartItems;
export const selectCartQuantity = (state) => state.cartStore.quantity;
export const selectCartTotal = (state) => state.cartStore.total;
export const { addToCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
