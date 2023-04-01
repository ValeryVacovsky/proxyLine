import { combineReducers, createStore, applyMiddleware } from 'redux'
import { authReducer } from './reducers/authReducer'
import { proxyReducer } from './reducers/proxyReducer'
import { orderReducer } from './reducers/orderReducer'
import { countryOrderReducer } from './reducers/countryOrderReducer'
import { textReducer } from './reducers/textReducer'
import { filterReducer } from './reducers/filterReducer'
import { balanceSystemsReducer } from './reducers/balanceSystemsReducer'
import { orderPriceReducer } from './reducers/orderPriceReducer'
import { ipsTagsReducer } from './reducers/ipsTagsReducer'
import { balanceReducer } from './reducers/balanceReducer'
import { ordersReducer } from './reducers/ordersReducer'
import { countryDiscriptionReducer } from './reducers/countryDiscriptionReducer'
import { selectedProxyReducer } from './reducers/selectedProxyReducer'
import { cuponReducer } from './reducers/cuponReducer'
import { endpointReducer } from './reducers/endpointReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  authReducer,
  proxy: proxyReducer,
  orderReducer,
  countryOrderReducer,
  balanceSystemsReducer,
  textReducer,
  filterReducer,
  orderPriceReducer,
  ipsTagsReducer,
  balanceReducer,
  ordersReducer,
  countryDiscriptionReducer,
  selectedProxyReducer,
  cuponReducer,
  endpointReducer,
})

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk))
export default configureStore
