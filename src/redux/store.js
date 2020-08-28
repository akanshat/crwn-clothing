import { createStore, applyMiddleware } from 'redux';
//add middlewareto store so that
//when actions get fired we can display them
//logger catches action and console.logs for us and exits

import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger];
//anything we want to add we cant add to middlewares\
//thats why spread[...] is used 
const store = createStore(rootReducer, applyMiddleware(...middlewares));

//this store we import in out index.js 
//and pass it into the provider
export default store;