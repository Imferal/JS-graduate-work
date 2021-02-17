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
