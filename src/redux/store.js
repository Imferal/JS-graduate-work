import reducer from './reducer';

const {createStore} = require ('redux');

const initialState = {
  security: {
    //   ACCESS_KEY: 'ibjObXQdFjmUQ7ZfkgOkBMga42B9_ZjlZnCVn-Gytxg',
    //   SECRET: '5aMPjjFaQbnF_rseQj80B_eAiD9g0QldggR93EVWhgc',
    //   CALLBACK_URL: 'http://localhost:3000/auth',
    //   ACCESS_TOKEN: '',
    //   BEARER_TOKEN: '',
    // ACCESS_TOKEN_ISFETCHING: false,
    // ACCESS_TOKEN_ISLOADED: false,
    BEARER_TOKEN_ISFETCHING: false,
    BEARER_TOKEN_ISLOADED: false,
  },
  serverData: {
    greetPhoto: {
      url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
      description: 'black and white cat lying on brown bamboo chair inside room',
    },
    greetPhotoisLoaded: false,
    results: {},
  },
  cookieIsLoaded: false,
  galleryIsLoaded: false,
  galleryIsFetching: false,
  username: '',
  usernameIsFetching: false,
};

let store = createStore (reducer, initialState);

export default store;
