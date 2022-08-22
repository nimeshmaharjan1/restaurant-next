const { createSlice } = require("@reduxjs/toolkit");
const isServer = typeof window === "undefined";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.quantity += 1;
      state.total += Number(action.payload.price) * state.quantity;
      state.cartItems = [...state.cartItems, action.payload];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartQuantity", JSON.stringify(state.quantity));
      localStorage.setItem("cartTotal", JSON.stringify(state.total));
    },
    fetchCartItems: (state, action) => {
      if (localStorage.getItem("cartItems")) {
        state.cartItems = JSON.parse(localStorage.getItem("cartItems"));
        state.quantity = JSON.parse(localStorage.getItem("cartQuantity"));
        state.total = JSON.parse(localStorage.getItem("cartTotal"));
      }
    },
    resetCart: (state) => {
      state = initialState;
    },
  },
});
export const selectCartItems = (state) => state.cartStore.cartItems;
export const selectCartQuantity = (state) => state.cartStore.quantity;
export const selectCartTotal = (state) => state.cartStore.total;
export const { addToCart, resetCart, fetchCartItems } = cartSlice.actions;
export default cartSlice.reducer;
