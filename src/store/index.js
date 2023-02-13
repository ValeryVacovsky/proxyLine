import { combineReducers, createStore, applyMiddleware } from 'redux'
import { authReducer } from './reducers/authReducer'
import { proxyReducer } from './reducers/proxyReducer'
import { orderReducer } from './reducers/orderReducer'
import { countryOrderReducer } from './reducers/countryOrderReducer'
import { textReducer } from './reducers/textReducer'
import { BalanceSystems } from './reducers/balanceSystems'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  auth: authReducer,
  proxy: proxyReducer,
  orderReducer,
  countryOrderReducer,
  BalanceSystems,
  textReducer,
})

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk))
export default configureStore
