import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // this is an actual localstorage object on our window browser
// this tells redux i want to use localstorage as my default storage
// we can also have sessionStorage the same way

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root", // at what point we want to start storing inside of our reducer object
  storage, // storage key goees to this point inside reducer where we are storing
  whitelist: ["cart"], // whitelist tells us the names of reducer we want to persist,
  // this lets redux persist know that we only want cart-reducer to persist
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
  //will return one giant object
  //now we bring our new root-reducer to our
  //store and then store to provider in index.js
});

//here we export modified version of our root reducer with persistence capabilties
export default persistReducer(persistConfig, rootReducer);
