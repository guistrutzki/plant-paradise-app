import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Typography } from '@components/atoms/Typography'
import * as S from './FavoriteCard.styles'

import plantImg from '@assets/initial-screen-plant.png'
import theme from '@utils/theme'

export const FavoriteCard = () => {
  return (
    <S.Container>
      <S.PlantImage source={plantImg} />

      <S.ContentWrapper>
        <Typography>Green Vines</Typography>
        <Typography fontWeight="$bold" mt={8}>
          $9.20
        </Typography>
      </S.ContentWrapper>

      <S.FavoriteButton>
        <MaterialCommunityIcons
          name="heart"
          size={16}
          color={theme.COLORS.$primary}
        />
      </S.FavoriteButton>
    </S.Container>
  )
}
