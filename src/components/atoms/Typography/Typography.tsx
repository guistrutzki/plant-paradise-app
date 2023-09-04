import { StyledCommonProps } from '@utils/styledCommonProps'
import theme from '@utils/theme'
import React, { ReactNode } from 'react'
import { TextProps } from 'react-native'
import { Text, getTypographyStyle } from './Typography.styles'

interface TypographyProps extends TextProps, StyledCommonProps {
  children: ReactNode
  size?: keyof typeof theme.typography
  color?: keyof typeof theme.COLORS
  fontWeight?: keyof typeof theme.fontWeight
}

export const Typography = ({
  size = '$font-description-md',
  fontWeight = '$regular',
  color = '$color-grayscale-1',
  style,
  children,
  ...props
}: TypographyProps) => {
  return (
    <Text
      {...props}
      style={[
        getTypographyStyle(
          theme.typography[size],
          theme.fontWeight[fontWeight],
          color,
        ),
        style,
      ]}>
      {children}
    </Text>
  )
}
