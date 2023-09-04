import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ROUTES_NAME } from './routesName'
import { InitialScreen } from '@screens/InitialScreen'

const App = createNativeStackNavigator()

export const AuthRoutes = () => {
  return (
    <App.Navigator screenOptions={{ headerShown: false }}>
      <App.Screen name={ROUTES_NAME.INITIAL_SCREEN} component={InitialScreen} />
    </App.Navigator>
  )
}
