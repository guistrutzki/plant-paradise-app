import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { ROUTES_NAME } from './routesName'
import { HomeScreen } from '@screens/HomeScreen'
import { FavoritesScreen } from '@screens/FavoritesScreen'
import { CartScreen } from '@screens/CartScreen'
import theme from '@utils/theme'
import { Typography } from '@components/atoms/Typography'

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 100,
          paddingTop: 12,
          shadowColor: '#000',
          shadowOpacity: 0.15,
          shadowRadius: 8,
          elevation: 3,
        },
      }}>
      <Tab.Screen
        name={ROUTES_NAME.HOME_SCREEN}
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Typography
              size="$font-description-sm"
              color={focused ? '$primary' : '$color-grayscale-1'}>
              Home
            </Typography>
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={26}
              color={
                focused
                  ? theme.COLORS['$primary']
                  : theme.COLORS['$color-grayscale-1']
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES_NAME.FAVORITES_SCREEN}
        component={FavoritesScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Typography
              size="$font-description-sm"
              color={focused ? '$primary' : '$color-grayscale-1'}>
              Favorites
            </Typography>
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="heart-outline"
              size={24}
              color={
                focused
                  ? theme.COLORS['$primary']
                  : theme.COLORS['$color-grayscale-1']
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES_NAME.CART_SCREEN}
        component={CartScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Typography
              size="$font-description-sm"
              color={focused ? '$primary' : '$color-grayscale-1'}>
              Cart
            </Typography>
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="shopping-outline"
              size={24}
              color={
                focused
                  ? theme.COLORS['$primary']
                  : theme.COLORS['$color-grayscale-1']
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
