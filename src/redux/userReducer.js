const FETCH_USER_NAME = 'FETCH_USER_NAME';
const SET_USER_NAME = 'SET_USER_NAME';
const RESTORE_USER_NAME = 'RESTORE_USER_NAME';

const initialState = {
  username: 'anonymous',
  USERNAME_IS_FETCHING: false,
  USERNAME_IS_RESTORED: false,
  USERNAME_IS_LOADED: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_NAME: {

      return {
        ...state,
        USERNAME_IS_FETCHING: true,
        USERNAME_IS_LOADED: false
      };
    }

    case SET_USER_NAME: {
      localStorage.setItem('user', action.name);
      return {
        ...state,
        username : action.name,
        USERNAME_IS_FETCHING : false,
        USERNAME_IS_LOADED : true,
      };
    }

    case RESTORE_USER_NAME: {
      return {
        ...state,
        USERNAME_IS_LOADED : true,
        USERNAME_IS_RESTORED : true,
        username : localStorage.getItem('user'),
      };
    }

    default:
      return state;
  }
}

export const fetchUserName = () => ({type: FETCH_USER_NAME});
export const setUserName = name => ({
  type: SET_USER_NAME,
  name,
});
export const restoreUserName = () => ({type: RESTORE_USER_NAME});
