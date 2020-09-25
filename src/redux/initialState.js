const initialState = {
  api: {
    BEARER_TOKEN_ISFETCHING: false,
    BEARER_TOKEN_ISLOADED: false,
    COOKIE_ISLOADED: false,
  },
  data: {
    jsx: [],
    results: [],
    JSX_ISLOADED: false,
    SERVERDATA_ISFETCHING: false,
    SERVERDATA_ISLOADED: false,
  },
  user: {
    username: '',
    USERNAME_ISFETCHING: false,
  },
};

export default initialState;
