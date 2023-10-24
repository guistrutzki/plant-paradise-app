// import { createSlice } from '@reduxjs/toolkit'

// import { useAppSelector } from "../index";

// const favoritesSlice = createSlice({
//   name: 'favorites',
//   initialState: {
//     list: []
//   },
//   reducers: {
//     addToFavorite: (state, action) => {
//       state.list = action.payload;
//     },

//     removeFromFavorite: (state, action) => {
//       state.list = action.payload;
//     },
//   }
// })

// export const { addToFavorite, removeFromFavorite } = favoritesSlice.actions;
// export const plants = favoritesSlice.reducer

// export const useFavorites = () => {
//   return useAppSelector(state => {
//     const { list } = state.plants

//     return { list }
//   })
// }