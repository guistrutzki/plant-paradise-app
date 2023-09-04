import { StyledCommonProps } from '@utils/styledCommonProps'
import * as S from './Button.styles'
import { TouchableOpacityProps } from 'react-native'
import theme from '@utils/theme'
import { Typography } from '../Typography'

interface ButtonProps extends StyledCommonProps, TouchableOpacityProps {
  title: string
  color?: keyof typeof theme.COLORS
  background?: keyof typeof theme.COLORS
  border?: {
    size: number
    color: string
  }
}
export const Button = ({
  background = '$primary',
  color = '$bg-primary',
  border,
  title,
  ...rest
}: ButtonProps) => {
  return (
    <S.Container
      activeOpacity={0.8}
      background={background}
      border={border}
      {...rest}>
      <S.ButtonContent>
        <Typography fontWeight="$medium" color={color}>
          {title}
        </Typography>
      </S.ButtonContent>
    </S.Container>
  )
}
