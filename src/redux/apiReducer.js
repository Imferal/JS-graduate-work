import Cookies from 'universal-cookie';

const FETCH_BEARER_TOKEN = 'FETCH_BEARER_TOKEN';
const SET_BEARER_TOKEN = 'SET_BEARER_TOKEN';
const LOAD_COOKIE = 'LOAD_COOKIE';
const REMOVE_BEARER_TOKEN = 'REMOVE_BEARER_TOKEN';

const cookies = new Cookies ();

const initialState = {
  BEARER_TOKEN_ISFETCHING: false,
  BEARER_TOKEN_ISLOADED: false,
  COOKIE_ISLOADED: false,
};

export default function apiReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_BEARER_TOKEN: {
      state.BEARER_TOKEN_ISFETCHING = true;
      return {...state};
    }

    case SET_BEARER_TOKEN: {
      state.BEARER_TOKEN_ISLOADED = true;
      if (
        cookies.get ('bearerToken') === null ||
        cookies.get ('bearerToken') === undefined ||
        cookies.get ('bearerToken') === 'undefined'
      ) {
        cookies.set ('bearerToken', action.bearerToken, {
          sameSite: 'None',
          secure: true,
        });
      }
      return {...state};
    }
    case LOAD_COOKIE: {
      state.COOKIE_ISLOADED = true;
      return {...state};
    }
    case REMOVE_BEARER_TOKEN: {
      cookies.remove ('bearerToken');
      return {...state};
    }

    default:
      return {...state};
  }
}

export const fetchBearerTokenAC = () => ({type: FETCH_BEARER_TOKEN});
export const setBearerTokenAC = bearerToken => ({
  type: SET_BEARER_TOKEN,
  bearerToken,
});
export const loadCookieAC = () => ({type: LOAD_COOKIE});
export const removeBearerTokenAC = () => ({type: REMOVE_BEARER_TOKEN});
