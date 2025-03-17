import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  //actions
  reducers: {
    addItem: (state, action) => {
      //mutating the stater here
      state.items.push(action.payload);
    },
    removeItems: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
