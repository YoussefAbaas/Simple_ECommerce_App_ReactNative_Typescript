import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface CartState {
  products: {
    title: string;
    image: string;
    price: number;
    color: string;
    size: string;
  }[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<CartState['products'][number]>,
    ) => {
      state.products.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.products.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;
