<<<<<<< HEAD
const FETCH_BEARER_TOKEN = 'FETCH_BEARER_TOKEN';
const SET_BEARER_TOKEN = 'SET_BEARER_TOKEN';
const REMOVE_BEARER_TOKEN = 'REMOVE_BEARER_TOKEN';

const initialState = {
  BEARER_TOKEN_ISFETCHING: false,
  BEARER_TOKEN_ISLOADED: false,
};

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BEARER_TOKEN: {
      state.BEARER_TOKEN_ISFETCHING = true;
      state.BEARER_TOKEN_ISLOADED = false;
      return { ...state };
    }

    case SET_BEARER_TOKEN: {
      state.BEARER_TOKEN_ISFETCHING = false;
      state.BEARER_TOKEN_ISLOADED = true;
      localStorage.setItem('bearerToken', action.bearerToken);
      return { ...state };
    }

    case REMOVE_BEARER_TOKEN: {
      localStorage.removeItem('bearerToken');
      return { ...state };
    }

    default:
      return { ...state };
  }
}

export const fetchBearerToken = () => ({ type: FETCH_BEARER_TOKEN });
export const setBearerToken = bearerToken => ({
  type: SET_BEARER_TOKEN,
  bearerToken,
});
export const removeBearerToken = () => ({ type: REMOVE_BEARER_TOKEN });
=======
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
          sameSite: 'lax',
          secure: false,
          path: '/',
        });
      }
      return {...state};
    }
    case LOAD_COOKIE: {
      state.COOKIE_ISLOADED = true;
      return {...state};
    }
    case REMOVE_BEARER_TOKEN: {
      cookies.remove ('bearerToken', {path: '/'});
      cookies.remove ('user', {path: '/'});
      cookies.remove ('activePhotoId', {path: '/'});
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
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
