import { combineReducers } from 'redux'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

export default combineReducers({
  user: userReducer,
  cart: cartReducer
  //will return one giant object
  //now we bring our new root-reducer to our
  //store and then store to provider in index.js
})
