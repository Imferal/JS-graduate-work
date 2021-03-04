const FETCH_BEARER_TOKEN = 'FETCH_BEARER_TOKEN';
const SET_BEARER_TOKEN = 'SET_BEARER_TOKEN';
const REMOVE_BEARER_TOKEN = 'REMOVE_BEARER_TOKEN';

const initialState = {
  BEARER_TOKEN_IS_FETCHING: false,
  BEARER_TOKEN_IS_LOADED: false,
};

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BEARER_TOKEN: {
      return {
        ...state,
        BEARER_TOKEN_IS_FETCHING : true,
        BEARER_TOKEN_IS_LOADED : false
      };
    }

    case SET_BEARER_TOKEN: {
      localStorage.setItem('bearerToken', action.bearerToken);
      return {
        ...state,
        BEARER_TOKEN_IS_FETCHING : false,
        BEARER_TOKEN_IS_LOADED : true
      };
    }

    case REMOVE_BEARER_TOKEN: {
      localStorage.removeItem('bearerToken');
      return state;
    }

    default:
      return state;
  }
}

export const fetchBearerToken = () => ({ type: FETCH_BEARER_TOKEN });
export const setBearerToken = bearerToken => ({
  type: SET_BEARER_TOKEN,
  bearerToken,
});
export const removeBearerToken = () => ({ type: REMOVE_BEARER_TOKEN });
