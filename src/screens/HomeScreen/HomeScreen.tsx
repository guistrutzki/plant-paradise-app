import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FlatList, SafeAreaView } from 'react-native'

import { Typography } from '@components/atoms/Typography'
import * as S from './HomeScreen.styles'
import { PopularPlantCard } from '@components/molecules/PopularPlantCard'
import { PlantCard } from '@components/molecules/PlantCard'
import { CategoryTab } from '@components/organisms/CategoryTab'

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
              data={popularPlantsData}
              showsHorizontalScrollIndicator={false}
              renderItem={() => <PopularPlantCard />}
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
        data={plantsData}
        contentContainerStyle={{ padding: 16, paddingHorizontal: 24 }}
        renderItem={() => <PlantCard />}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  )
}
