import { configureStore, combineReducers } from '@reduxjs/toolkit';
import walletReducers from '../redux/reducers/walletReducers' // Assuming Reducer is exported as default from './Reducers'

const rootReducer = combineReducers({
  wallet: walletReducers, 
});

const store = configureStore({
  reducer: rootReducer, 
});

export default store;
