import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import Navigation from './componets/navigation/Navigation'
import SplashScreen from 'react-native-splash-screen'

const store = configureStore()

function App() {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App
