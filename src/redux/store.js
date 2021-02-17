import {combineReducers, createStore} from 'redux';
import apiReducer from './apiReducer';
import dataReducer from './dataReducer';
import userReducer from './userReducer';

let reducers = combineReducers ({
  api: apiReducer,
  data: dataReducer,
  user: userReducer,
});

let store = createStore (reducers);

window.store = store;

export default store;
