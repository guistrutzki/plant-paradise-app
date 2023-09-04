import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Typography } from '@components/atoms/Typography'
import * as S from './PopularPlantCard.styles'

import plantImg from '@assets/initial-screen-plant.png'
import theme from '@utils/theme'

export const PopularPlantCard = () => {
  return (
    <S.Container>
      <S.PlantImage source={plantImg} />

      <S.FavoriteButton>
        <MaterialCommunityIcons
          name="heart-outline"
          size={16}
          color={theme.COLORS['$color-grayscale-1']}
        />
      </S.FavoriteButton>

      <S.ContentWrapper>
        <Typography>Green Vines</Typography>
        <Typography fontWeight="$bold" mt={8}>
          $9.20
        </Typography>

        <S.AddToCartButton>
          <Typography size="$font-description-sm" color="$bg-primary">
            Add to cart
          </Typography>
        </S.AddToCartButton>
      </S.ContentWrapper>
    </S.Container>
  )
}
