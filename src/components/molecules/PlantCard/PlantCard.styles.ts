import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  margin-bottom: 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS['$bg-primary']};
  shadow-color: #000;
  shadow-opacity: 0.15;
  shadow-radius: 8px;
  elevation: 3;
  position: relative;
`

export const PlantImage = styled.Image`
  width: 100%;
  height: 200px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

export const FavoriteButton = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  left: 8px;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS['$bg-primary']};
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`

export const ContentWrapper = styled.View`
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const TitleWrapper = styled.View``

export const AddToCartButton = styled.View`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.COLORS.$primary};
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`
