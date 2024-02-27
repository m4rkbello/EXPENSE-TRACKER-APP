import { configureStore } from '@reduxjs/toolkit';
import walletReducer from '../redux/reducers/walletReducers'; // Importing the default export

const store = configureStore({
  reducer: walletReducer,
});

export default store;
