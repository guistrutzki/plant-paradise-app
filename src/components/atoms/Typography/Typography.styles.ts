import styled from 'styled-components/native'
import { TextStyle, Platform } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  FontSize,
  FontWeight,
  LineHeight,
  Typography,
} from './Typography.types'
import theme from '@utils/theme'
import styledCommonProps from '@utils/styledCommonProps'

export const Text = styled.Text<any>`
  ${styledCommonProps}
`

const isAndroid = Platform.OS === 'android'

export const getTypographyStyle = (
  typography: Typography,
  fontWeight: FontWeight,
  color: keyof typeof theme.COLORS,
): TextStyle => {
  const fontFamily = theme.FONTS[fontWeight]

  return {
    lineHeight: RFValue(
      Number(LineHeight[typography]) * (isAndroid ? 1.03 : 1),
    ),
    fontSize: RFValue(Number(FontSize[typography]) * (isAndroid ? 1.03 : 1)),
    color: theme.COLORS[color],
    fontFamily,
  }
}
