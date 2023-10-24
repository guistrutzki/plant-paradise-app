import { configureStore } from '@reduxjs/toolkit'
import { plants } from '@store/slices/plants'

export const store = configureStore({
  reducer: {
    plants,
  }
})