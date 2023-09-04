import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 16px;
`

export const ProfileButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS['$color-grayscale-1']};
  width: 30px;
  height: 30px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`

export const PopularHeader = styled.View`
  padding: 24px 24px 0;
`
