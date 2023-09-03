import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { TabNavigator } from './TabNavigator'
import { ROUTES_NAME } from './routesName'

const App = createNativeStackNavigator()

export const AppRoutes = () => {
  return (
    <App.Navigator screenOptions={{ headerShown: false }}>
      <App.Screen name={ROUTES_NAME.TAB_NAVIGATOR} component={TabNavigator} />
    </App.Navigator>
  )
}
