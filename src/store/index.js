import { combineReducers, createStore } from 'redux'
import { authReducer } from './reducers/authReducer'
import { proxyReducer } from './reducers/proxyReducer'
import { orderReducer } from './reducers/orderReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  proxy: proxyReducer,
  orderReducer,
})

const configureStore = () => createStore(rootReducer)
export default configureStore
