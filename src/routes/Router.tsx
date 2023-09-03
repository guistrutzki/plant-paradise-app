import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ROUTES_NAME } from './routesName'
import { AppRoutes } from './App.routes'

const MainNavigator = createNativeStackNavigator()

export const Router = () => {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator screenOptions={{ headerShown: false }}>
        <MainNavigator.Screen
          name={ROUTES_NAME.APP_NAVIGATOR}
          component={AppRoutes}
        />
      </MainNavigator.Navigator>
    </NavigationContainer>
  )
}
