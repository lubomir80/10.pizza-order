import { configureStore } from '@reduxjs/toolkit';
import userReducer from './User/userSlice';
import cartReducer from './Cart/cartSlice';

export const store = configureStore({
   reducer: {
      user: userReducer,
      cart: cartReducer,

   },
});

export default store;