import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS['$bg-primary']};
`

export const PlantImage = styled.Image`
  width: 100%;
  height: 50%;
`

export const ContentWrapper = styled.View`
  padding: 24px;
`
