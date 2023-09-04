import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ROUTES_NAME } from './routesName'
import { AppRoutes } from './App.routes'
import { AuthRoutes } from './Auth.routes'

const MainNavigator = createNativeStackNavigator()

export const Router = () => {
  const isAuth = true

  return (
    <NavigationContainer>
      <MainNavigator.Navigator screenOptions={{ headerShown: false }}>
        {isAuth ? (
          <MainNavigator.Screen
            name={ROUTES_NAME.APP_NAVIGATOR}
            component={AppRoutes}
          />
        ) : (
          <MainNavigator.Screen
            name={ROUTES_NAME.AUTH_NAVIGATOR}
            component={AuthRoutes}
          />
        )}
      </MainNavigator.Navigator>
    </NavigationContainer>
  )
}
