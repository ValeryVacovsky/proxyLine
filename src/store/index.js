import { combineReducers, createStore } from 'redux'
import { authReducer } from './reducers/authReducer'
import { proxyReducer } from './reducers/proxyReducer'
import { orderReducer } from './reducers/orderReducer'
import { countryOrderReducer } from './reducers/countryOrderReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  proxy: proxyReducer,
  orderReducer,
  countryOrderReducer,
})

const configureStore = () => createStore(rootReducer)
export default configureStore
