import reducer from './reducer';

const {createStore} = require ('redux');

const initialState = {
  security: {
    BEARER_TOKEN_ISFETCHING: false,
    BEARER_TOKEN_ISLOADED: false,
  },
  serverData: {
    greetPhoto: {
      url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
      description: 'black and white cat lying on brown bamboo chair inside room',
    },
    greetPhotoisLoaded: false,
    results: [],
  },
  cookieIsLoaded: false,
  galleryIsFetching: false,
  galleryIsLoaded: false,
  photos: [],
  photosIsLoaded: false,
  username: '',
  usernameIsFetching: false,
};

let store = createStore (reducer, initialState);

export default store;
