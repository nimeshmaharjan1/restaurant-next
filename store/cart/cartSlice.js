const { createSlice, current } = require("@reduxjs/toolkit");
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
      state.total += Number(action.payload.price);
      state.cartItems = [...state.cartItems, action.payload];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartQuantity", JSON.stringify(state.quantity));
      localStorage.setItem("cartTotal", JSON.stringify(state.total));
      console.log(state.cartItems);
    },
    fetchCartItems: (state, action) => {
      if (localStorage.getItem("cartItems")) {
        state.cartItems = JSON.parse(localStorage.getItem("cartItems"));
        state.quantity = JSON.parse(localStorage.getItem("cartQuantity"));
        state.total = JSON.parse(localStorage.getItem("cartTotal"));
      }
    },
    resetCart: (state) => {
      state.cartItems = [];
      state.quantity = 0;
      state.total = 0;
      localStorage.removeItem("cartItems");
      localStorage.removeItem("cartQuantity");
      localStorage.removeItem("cartTotal");
    },

    removeItem: (state, action) => {
      if (state.cartItems.length < 2) {
        state.total = 0;
        state.quantity = 0;
        state.cartItems = [];
      } else {
        state.cartItems = current(state.cartItems)
          .filter((item) => {
            return item.id !== action.payload;
          })
          .map((item) => {
            state.quantity -= 1;
            console.log(item);
            state.total = 0;
            state.total += Number(item.price);
            return item;
          });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartQuantity", JSON.stringify(state.quantity));
      localStorage.setItem("cartTotal", JSON.stringify(state.total));
    },
  },
});
export const selectCartItems = (state) => state.cartStore.cartItems;
export const selectCartQuantity = (state) => state.cartStore.quantity;
export const selectCartTotal = (state) => state.cartStore.total;
export const { addToCart, resetCart, fetchCartItems, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
