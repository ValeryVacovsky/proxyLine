import { combineReducers, createStore, applyMiddleware } from 'redux'
import { authReducer } from './reducers/authReducer'
import { proxyReducer } from './reducers/proxyReducer'
import { orderReducer } from './reducers/orderReducer'
import { countryOrderReducer } from './reducers/countryOrderReducer'
import { textReducer } from './reducers/textReducer'
import { filterReducer } from './reducers/filterReducer'
import { BalanceSystems } from './reducers/balanceSystems'
import { orderPriceReducer } from './reducers/orderPriceReducer'
import { ipsTagsReducer } from './reducers/ipsTagsReducer'
import { balanceReducer } from './reducers/balanceReducer'
import { ordersReducer } from './reducers/ordersReducer'
import { countryDiscriptionReducer } from './reducers/countryDiscriptionReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  authReducer,
  proxy: proxyReducer,
  orderReducer,
  countryOrderReducer,
  BalanceSystems,
  textReducer,
  filterReducer,
  orderPriceReducer,
  ipsTagsReducer,
  balanceReducer,
  ordersReducer,
  countryDiscriptionReducer,
})

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk))
export default configureStore
