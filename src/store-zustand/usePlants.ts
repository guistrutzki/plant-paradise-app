import { create } from 'zustand'
import { PlantDTO } from '@services/PlantService'

interface PlantsStore {
  mostPopular: PlantDTO[]
  items: PlantDTO[]
  isLoading: boolean

  setIsLoading: (state: boolean) => void
  setData: (items: PlantDTO[], mostPopular: PlantDTO[]) => void
}

export const usePlantsStore = create<PlantsStore>(set => ({
  isLoading: true,
  items: [],
  mostPopular: [],

  setData: (items, mostPopular) => {
    set(() => ({
      items,
      mostPopular
    }))
  },
  
  setIsLoading: (state) => {
    set(() => ({
      isLoading: state
    }))
  }
}))