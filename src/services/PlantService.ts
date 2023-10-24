import { api } from "./api"

export interface PlantDTO {
  id: string,
  title: string,
  description: string
  price: number
  category: string
  categoryId: string,
  image: string
}

export interface GetAllPlantsResponse {
  statusCode: number
  body: {
    data: {
      mostPopular: PlantDTO[]
      items: PlantDTO[]
    }
  }
}

export const getAllPlants = async () => {
  const response = await api.get<GetAllPlantsResponse>('')
  return response.data
}