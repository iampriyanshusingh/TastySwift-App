import { createSlice, current } from "@reduxjs/toolkit";

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
    removeItems: (stat,action) => {
      state.items.pop();
    },
    clearCart: (state,action) => {
      state.items.length = 0; // or i can use return {items: []}

      // if i want to console.log(state) it will not show the value it will show the ProxyArray
      // But if we want to see the value we have to use console.log(current(state));
      // and this current is come from @reduxToolkit
    },
  },
});

export const { addItem, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
