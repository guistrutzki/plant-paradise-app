import { useQuery } from "react-query";

import { getAllPlants } from "@services/PlantService";

const useFetchPlants = () => {
  return useQuery('all-plants', () => getAllPlants())
}

export { useFetchPlants }