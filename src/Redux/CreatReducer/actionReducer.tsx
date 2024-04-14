interface CartItem {
  id: number;
  quantity: number;
  price: number;
}

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// get data in localstorage

const item: CartItem[] =
  localStorage.getItem("cartItems") !== null
    ? /* @ts-ignore */
      JSON.parse(localStorage.getItem("cartItems"))
    : [];

const initialState = {
  shopping: item,
  totlaPrice: 0,
  paymentStatus: "unpaid",
};

const fetchareSlice = createSlice({
  name: "shpping",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemInCart = state.shopping.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.shopping.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.shopping.map((item) => item))
      );
    },
    incrementQuantity: (state, action) => {
      const item = state.shopping.find((item) => item.id === action.payload);
      if (item !== undefined) {
        item.quantity++;
        localStorage.setItem(
          "cartItems",
          JSON.stringify(state.shopping.map((item) => item))
        );
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.shopping.find((item) => item.id === action.payload)!;

      if (item.quantity > 1) {
        item.quantity--;
      }
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.shopping.map((item) => item))
      );
    },
    removeItem: (state, action) => {
      const removeItem = state.shopping.filter(
        (item) => item.id !== action.payload
      );
      state.shopping = removeItem;
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.shopping.map((item) => item))
      );
    },
    calculateTotalPrice: (state) => {
      state.totlaPrice = state.shopping.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
    clearCart: (state) => {
      state.shopping = [];
      state.totlaPrice = 0;
    },
  },
});

export default fetchareSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  calculateTotalPrice,
  clearCart,
} = fetchareSlice.actions;
