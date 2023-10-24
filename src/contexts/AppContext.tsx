import { ReactNode } from 'react'
import { PlantsProvider } from './PlantsContext'

interface AppContextProps {
  children?: ReactNode
}

export const AppContext = ({ children }: AppContextProps) => {
  return <PlantsProvider>{children}</PlantsProvider>
}
