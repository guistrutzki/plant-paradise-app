import styled from 'styled-components/native'

export const Container = styled.View`
  height: 140px;
  background-color: ${({ theme }) => theme.COLORS['$bg-primary']};
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  elevation: 3;
  position: relative;
  flex-direction: row;
  border-radius: 8px;
  width: 330px;
  margin-right: 16px;
`

export const PlantImage = styled.Image`
  width: 50%;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`

export const ContentWrapper = styled.View`
  padding: 8px;
  flex: 1;
`

export const AddToCartButton = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.$primary};
  margin-top: auto;
  padding: 4px;
`

export const FavoriteButton = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  left: 8px;
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.COLORS['$bg-primary']};
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`
