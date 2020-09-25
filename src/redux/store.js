import {combineReducers, createStore} from 'redux';
import apiReducer from './apiReducer';
import dataReducer from './dataReducer';
import userReducer from './userReducer';

let reducers = combineReducers ({
  api: apiReducer,
  data: dataReducer,
  user: userReducer,
});

// const initialState = {
//   api: {
//     BEARER_TOKEN_ISFETCHING: false,
//     BEARER_TOKEN_ISLOADED: false,
//     COOKIE_ISLOADED: false,
//   },
//   data: {
//     jsx: [],
//     results: [],
//     JSX_ISLOADED: false,
//     SERVERDATA_ISFETCHING: false,
//     SERVERDATA_ISLOADED: false,
//   },
//   user: {
//     username: '',
//     USERNAME_ISFETCHING: false,
//   },
// };

let store = createStore (reducers);

export default store;
