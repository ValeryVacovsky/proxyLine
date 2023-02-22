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
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  auth: authReducer,
  proxy: proxyReducer,
  orderReducer,
  countryOrderReducer,
  BalanceSystems,
  textReducer,
  filterReducer,
  orderPriceReducer,
  ipsTagsReducer,
})

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk))
export default configureStore
