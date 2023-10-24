import { MaterialCommunityIcons } from '@expo/vector-icons'
import { ActivityIndicator, FlatList, SafeAreaView } from 'react-native'
import { useEffect } from 'react'

import { Typography } from '@components/atoms/Typography'
import * as S from './HomeScreen.styles'
import { PopularPlantCard } from '@components/molecules/PopularPlantCard'
import { PlantCard } from '@components/molecules/PlantCard'
import { CategoryTab } from '@components/organisms/CategoryTab'
import { usePlants } from '@contexts/PlantsContext'
import { usePlantsStore } from '@store-zustand/usePlants'
import { getAllPlants } from '@services/PlantService'
import { useFetchPlants } from '@services/queries/useFetchPlants'
// import { loadPlants, usePlants } from '@store/slices/plants'
// import { useAppDispatch } from '@store/utils'

export const HomeScreen = () => {
  //! Redux
  // const dispatch = useAppDispatch()
  // const { items, mostPopular, isLoading } = usePlants()

  // useEffect(() => {
  //   dispatch(loadPlants())
  // }, [])

  //! Context API
  // const { fetchPlants, isLoading, items, mostPopular } = usePlants()

  // useEffect(() => {
  //   void fetchPlants()
  // }, [])

  //! Zustand
  // const items = usePlantsStore(state => state.items)
  // const mostPopular = usePlantsStore(state => state.mostPopular)
  // const isLoading = usePlantsStore(state => state.isLoading)

  // const setData = usePlantsStore(state => state.setData)
  // const setIsLoading = usePlantsStore(state => state.setIsLoading)

  // useEffect(() => {
  //   const init = async () => {
  //     try {
  //       const response = await getAllPlants()
  //       const { items, mostPopular } = response.body.data
  //       setData(items, mostPopular)
  //     } catch (err) {
  //       console.log(err)
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }

  //   void init()
  // }, [])

  //! React Query
  const { data, isLoading } = useFetchPlants()

  return (
    <S.Container>
      <SafeAreaView>
        <S.Header>
          <Typography size="$font-title-md" fontWeight="$bold">
            Hi, John
          </Typography>
          <S.ProfileButton>
            <MaterialCommunityIcons size={20} name="account-outline" />
          </S.ProfileButton>
        </S.Header>
      </SafeAreaView>

      <FlatList
        ListHeaderComponent={() => (
          <S.PopularPlantsWrapper>
            <Typography
              mb={8}
              ml={24}
              size="$font-title-sm"
              fontWeight="$medium">
              Most popular
            </Typography>

            <FlatList
              contentContainerStyle={{ paddingVertical: 16, paddingLeft: 24 }}
              horizontal
              // data={mostPopular}
              data={data?.body.data.mostPopular}
              showsHorizontalScrollIndicator={false}
              renderItem={() => <PopularPlantCard />}
              ListEmptyComponent={
                <S.LoadingWrapper>
                  {isLoading && <ActivityIndicator size={'large'} />}
                </S.LoadingWrapper>
              }
            />

            <CategoryTab
              mt={16}
              mb={24}
              ml={24}
              categories={['All', 'Indoor', 'Outdoor']}
              onChange={() => null}
            />
          </S.PopularPlantsWrapper>
        )}
        // data={items}
        data={data?.body.data.items}
        contentContainerStyle={{ padding: 16, paddingHorizontal: 24 }}
        renderItem={() => <PlantCard />}
        ListEmptyComponent={
          <S.LoadingWrapper>
            {isLoading && <ActivityIndicator size={'large'} />}
          </S.LoadingWrapper>
        }
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  )
}
