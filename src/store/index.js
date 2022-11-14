import { combineReducers, createStore } from 'redux';
import { authReducer } from './reducers/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

const configureStore = () => createStore(rootReducer);
export default configureStore;
