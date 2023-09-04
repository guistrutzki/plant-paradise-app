import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

import styledCommonProps from '@utils/styledCommonProps'
import theme from '@utils/theme'

interface ContainerProps {
  background?: keyof typeof theme.COLORS
  border?: {
    size: number
    color: string
  }
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  ${styledCommonProps}
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({ theme, background }) =>
    background ? theme.COLORS[background] : theme.COLORS['$color-grayscale-5']};

  ${({ border }) =>
    border &&
    css`
      border-width: ${border.size}px;
      border-color: ${border.color};
    `}
`

export const ButtonContent = styled.View`
  flex-direction: row;
  align-items: center;
`
