import { createStore, applyMiddleware } from "redux";
//add middlewareto store so that
//when actions get fired we can display them
//logger catches action and console.logs for us and exits

import { persistStore } from "redux-persist"; // enables us to cache our store
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
//anything we want to add we cant add to middlewares\
//thats why spread[...] is used
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
// we will wrap our application with this "persisted version of our store"
//

//this store we import in out index.js
//and pass it into the provider
export default { store, persistor };
