import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FlatList, SafeAreaView } from 'react-native'

import { Typography } from '@components/atoms/Typography'
import * as S from './HomeScreen.styles'
import { PopularPlantCard } from '@components/molecules/PopularPlantCard'

export const HomeScreen = () => {
  const popularPlantsData = [1, 2, 3]
  const plantsData = [1, 2, 3, 4, 5]

  return (
    <S.Container>
      <SafeAreaView>
        <S.Header>
          <Typography size="$font-title-md" fontWeight="$bold">
            Hi John
          </Typography>
          <S.ProfileButton>
            <MaterialCommunityIcons size={20} name="account-outline" />
          </S.ProfileButton>
        </S.Header>
      </SafeAreaView>

      <FlatList
        ListHeaderComponent={() => (
          <>
            <S.PopularHeader>
              <Typography size="$font-title-sm" fontWeight="$medium">
                Most popular
              </Typography>
            </S.PopularHeader>
            <FlatList
              horizontal
              contentContainerStyle={{ padding: 16 }}
              data={popularPlantsData}
              showsHorizontalScrollIndicator={false}
              renderItem={() => <PopularPlantCard />}
            />
          </>
        )}
        data={plantsData}
        renderItem={() => <></>}
      />
    </S.Container>
  )
}
