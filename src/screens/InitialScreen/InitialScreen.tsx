import { Typography } from '@components/atoms/Typography'
import plantImg from '@assets/initial-screen-plant.png'

import * as S from './InitialScreen.styles'
import { Button } from '@components/atoms/Button'

export const InitialScreen = () => {
  return (
    <S.Container>
      <S.PlantImage source={plantImg} />

      <S.ContentWrapper>
        <Typography size="$font-brand" fontWeight="$bold">
          Plant{'\n'}Paradise
        </Typography>

        <Typography size="$font-description-lg" mt={16}>
          Find your favorite plants and{'\n'}help the environment
        </Typography>

        <Button title="Sign In" mt={32} />
        <Button title="Sign Up" mt={16} />
      </S.ContentWrapper>
    </S.Container>
  )
}
