import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { PlantDTO, getAllPlants } from '@services/PlantService';
import { useAppSelector } from '../utils';

interface PlantSliceDTO {
  mostPopular: PlantDTO[]
  items: PlantDTO[]
  isLoading: boolean
}

export const loadPlants = createAsyncThunk('plants/load', async () => {
  const response = await getAllPlants()
  return response
})

const plantsSlice = createSlice({
  name: 'plants',
  initialState: {
    isLoading: true,
    mostPopular: [],
    items: []
  } as PlantSliceDTO,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(loadPlants.fulfilled, (state, action) => {
      state.mostPopular = action.payload?.body.data.mostPopular ?? []
      state.items = action.payload?.body.data.items ?? []
      state.isLoading = false
    })

    builder.addCase(loadPlants.pending, (state) => {
      state.mostPopular = []
      state.items = []
      state.isLoading = true
    })

    builder.addCase(loadPlants.rejected, (state) => {
      state.mostPopular = []
      state.items = []
      state.isLoading = false
    })
  }
})

export const plants = plantsSlice.reducer

export const usePlants = () => {
  return useAppSelector(state => {
    const { items, mostPopular, isLoading } = state.plants

    return { items, mostPopular, isLoading }
  })
}