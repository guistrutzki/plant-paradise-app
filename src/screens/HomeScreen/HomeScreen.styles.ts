import { deviceWidth } from '@utils/layoutUtils'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS['$bg-primary']};
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

export const PopularPlantsWrapper = styled.View`
  padding: 24px 0 0;
  width: ${deviceWidth}px;
  margin-left: -24px;
`

export const PlantListWrapper = styled.View`
  margin-top: 24px;
`

export const LoadingWrapper = styled.View`
  align-items: center;
  justify-content: center;
  width: ${deviceWidth - 48}px;
  height: 200px
`