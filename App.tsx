import React, { useEffect, useState } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import * as Font from 'expo-font'

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import { Router } from '@routes/Router'
import { ThemeProvider } from 'styled-components/native'
import theme from '@utils/theme'
import { store } from '@store/index'
import { AppContext } from '@contexts/AppContext'

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    const init = async () => {
      try {
        await Font.loadAsync({
          Poppins_400Regular,
          Poppins_500Medium,
          Poppins_700Bold,
        })
      } catch (err) {
        console.log(err)
      } finally {
        setAppIsReady(true)
      }
    }

    void init()
  }, [])

  if (!appIsReady) {
    return null
  }

  return (
    <AppContext>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </ReduxProvider>
    </AppContext>
  )
}
