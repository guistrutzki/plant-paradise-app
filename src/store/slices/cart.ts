import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useAppSelector } from "..";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    subtotal: 0,
    items: []
  },
  reducers: {
    addToCart: (state, action: Any<any>) => {},
    removeFromCart: (state, action) => {},
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export const cart = cartSlice.reducer

export const useCart = () => {
  return useAppSelector(state => {
    const { items, subtotal } = state.cart

    return { items, subtotal }
  })
}