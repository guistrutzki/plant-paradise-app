import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { PlantDTO, getAllPlants } from '@services/PlantService';
import { useAppSelector } from '../index';

interface PlantSliceDTO {
  mostPopular: PlantDTO[]
  items: PlantDTO[]
}

const initialState = {
  mostPopular: [],
  items: []
} as PlantSliceDTO

export const loadPlants = createAsyncThunk('plants/load', async () => {
  const response = await getAllPlants()
  return response
})

const plantsSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(loadPlants.fulfilled, (state, action) => {
      state.mostPopular = action.payload?.body.data.mostPopular ?? []
      state.items = action.payload?.body.data.items ?? []
    })
  }
})

export const plants = plantsSlice.reducer

export const usePlants = () => {
  return useAppSelector(state => {
    console.log("ASDSAd", state)
    const { items, mostPopular } = state.plants

    return { items, mostPopular }
  })
}