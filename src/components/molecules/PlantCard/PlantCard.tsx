import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Typography } from '@components/atoms/Typography'
import * as S from './PlantCard.styles'
import plantImg from '@assets/initial-screen-plant.png'
import theme from '@utils/theme'

export const PlantCard = () => {
  return (
    <S.Container>
      <S.PlantImage source={plantImg} />

      <S.FavoriteButton>
        <MaterialCommunityIcons
          name="heart-outline"
          size={20}
          color={theme.COLORS['$color-grayscale-1']}
        />
      </S.FavoriteButton>

      <S.ContentWrapper>
        <S.TitleWrapper>
          <Typography>Green Vines</Typography>
          <Typography mt={8} fontWeight="$bold">
            $9.20
          </Typography>
        </S.TitleWrapper>

        <S.AddToCartButton>
          <MaterialCommunityIcons
            name="shopping-outline"
            size={16}
            color="#fff"
          />
        </S.AddToCartButton>
      </S.ContentWrapper>
    </S.Container>
  )
}
