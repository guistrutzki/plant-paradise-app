import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ROUTES_NAME } from './routesName'
import { HomeScreen } from '@screens/HomeScreen'
import { FavoritesScreen } from '@screens/FavoritesScreen'
import { CartScreen } from '@screens/CartScreen'

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ROUTES_NAME.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen
        name={ROUTES_NAME.FAVORITES_SCREEN}
        component={FavoritesScreen}
      />
      <Tab.Screen name={ROUTES_NAME.CART_SCREEN} component={CartScreen} />
    </Tab.Navigator>
  )
}
