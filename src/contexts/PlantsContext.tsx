import { PlantDTO, getAllPlants } from '@services/PlantService'
import { ReactNode, createContext, useContext, useState } from 'react'

export interface PlantsProviderProps {
  children?: ReactNode
}

interface PlantsData {
  mostPopular: PlantDTO[]
  items: PlantDTO[]
  isLoading: boolean
  fetchPlants: () => Promise<void>
}

const PlantsContext = createContext({} as PlantsData)

export const PlantsProvider = ({ children }: PlantsProviderProps) => {
  const [items, setItems] = useState<PlantDTO[]>([])
  const [mostPopular, setMostPopular] = useState<PlantDTO[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchPlants = async () => {
    try {
      const response = await getAllPlants()
      setItems(response.body.data.items)
      setMostPopular(response.body.data.mostPopular)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <PlantsContext.Provider
      value={{
        items,
        isLoading,
        mostPopular,
        fetchPlants,
      }}>
      {children}
    </PlantsContext.Provider>
  )
}

export const usePlants = () => {
  const context = useContext(PlantsContext)
  return context
}
