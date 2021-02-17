<<<<<<< HEAD
const FETCH_USER_NAME = 'FETCH_USER_NAME';
const SET_USER_NAME = 'SET_USER_NAME';
const RESTORE_USER_NAME = 'RESTORE_USER_NAME';

const initialState = {
  username: 'anonymous',
  USERNAME_ISFETCHING: false,
  USERNAME_ISRESTORED: false,
  USERNAME_ISLOADED: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_NAME: {
      state.USERNAME_ISFETCHING = true;
      state.USERNAME_ISLOADED = false;
      return { ...state };
    }

    case SET_USER_NAME: {
      state.username = action.name;
      state.USERNAME_ISFETCHING = false;
      state.USERNAME_ISLOADED = true;
      localStorage.setItem('user', action.name);
      return { ...state };
    }

    case RESTORE_USER_NAME: {
      state.USERNAME_ISLOADED = true;
      state.USERNAME_ISRESTORED = true;
      state.username = localStorage.getItem('user');
      return { ...state };
    }

    default:
      return { ...state };
  }
}

export const fetchUserName = () => ({ type: FETCH_USER_NAME });
export const setUserName = name => ({
  type: SET_USER_NAME,
  name,
});
export const restoreUserName = () => ({ type: RESTORE_USER_NAME });
=======
import Cookies from 'universal-cookie';

const FETCH_USER_NAME = 'FETCH_USER_NAME';
const SET_USER_NAME = 'SET_USER_NAME';
const cookies = new Cookies ();

const initialState = {
  username: '',
  USERNAME_ISFETCHING: false,
};

export default function userReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_NAME: {
      state.USERNAME_ISFETCHING = true;
      return {...state};
    }
    case SET_USER_NAME: {
      state.username = action.name;
      state.USERNAME_ISFETCHING = false;
      if (cookies.get ('user') === null || cookies.get ('user') === undefined) {
        cookies.set ('user', state.username, {
          sameSite: 'lax',
          secure: true,
          path: '/',
        });
      }
      return {...state};
    }
    default:
      return {...state};
  }
}

export const fetchUserName = () => ({type: FETCH_USER_NAME});
export const setUserNameAC = name => ({
  type: SET_USER_NAME,
  name,
});
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
