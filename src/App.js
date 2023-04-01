import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import Navigation from './components/navigation/Navigation'

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App
