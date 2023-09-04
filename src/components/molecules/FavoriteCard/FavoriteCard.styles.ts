import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS['$bg-secondary']};
  width: 100%;
  flex-direction: row;
  height: 70px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
`

export const PlantImage = styled.Image`
  width: 90px;
  height: 100%;
  border-radius: 8px;
`

export const ContentWrapper = styled.View`
  padding: 8px;
  flex: 1;
`

export const FavoriteButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS['$bg-primary']};
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  align-self: center;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  elevation: 3;
`
