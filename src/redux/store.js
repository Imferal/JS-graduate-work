import reducer from './reducer';

const {createStore} = require ('redux');

const initialState = {
  security: {
    ACCESS_KEY: 'ibjObXQdFjmUQ7ZfkgOkBMga42B9_ZjlZnCVn-Gytxg',
    SECRET: '5aMPjjFaQbnF_rseQj80B_eAiD9g0QldggR93EVWhgc',
    TOKEN: '',
  },
  serverData: {
    results: {},
  },
  isLoaded: false,
  userLogin: 'Anonimous',
};

let store = createStore (reducer, initialState);

export default store;
