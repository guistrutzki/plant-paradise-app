import { FlatList, SafeAreaView } from 'react-native'
import * as S from './FavoritesScreen.styles'
import { Typography } from '@components/atoms/Typography'
import { FavoriteCard } from '@components/molecules/FavoriteCard'

export const FavoritesScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        ListHeaderComponent={
          <S.HeaderWrapper>
            <Typography fontWeight="$bold" size="$font-title-md">
              Favorites
            </Typography>
          </S.HeaderWrapper>
        }
        contentContainerStyle={{ padding: 24 }}
        data={[1, 2, 3, 5, 6, 7, 8]}
        renderItem={({ item }) => <FavoriteCard />}
      />
    </SafeAreaView>
  )
}
