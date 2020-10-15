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
          sameSite: 'None',
          secure: true,
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
