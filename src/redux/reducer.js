import Cookies from 'universal-cookie';

// action names
const FETCH_BEARER_TOKEN = 'FETCH_BEARER_TOKEN';
const SET_BEARER_TOKEN = 'SET_BEARER_TOKEN';
const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
const FETCH_USER_NAME = 'FETCH_USER_NAME';
const CHANGE_PHOTO_INFO = 'CHANGE_PHOTO_INFO';
const SET_USER_NAME = 'SET_USER_NAME';
const SET_PHOTOS = 'SET_PHOTOS';
const LOAD_COOKIE = 'LOAD_COOKIE';

const cookies = new Cookies ();

// actions
const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_USER_NAME: {
      state.usernameIsFetching = true;
      return state;
    }

    case SET_USER_NAME: {
      state.username = action.name;
      state.usernameIsFetching = false;
      if (
        cookies.get ('user') === null ||
        cookies.get ('user') === 'undefined'
      ) {
        cookies.set ('user', state.username, {
          sameSite: 'None',
          secure: true,
        });
      }
      return state;
    }

    case FETCH_BEARER_TOKEN: {
      state.api.BEARER_TOKEN_ISFETCHING = true;
      return state;
    }

    case SET_BEARER_TOKEN: {
      // debugger;
      state.api.BEARER_TOKEN_ISLOADED = true;
      if (
        cookies.get ('bearerToken') === null ||
        cookies.get ('bearerToken') === 'undefined'
      ) {
        cookies.set ('bearerToken', action.bearerToken, {
          sameSite: 'None',
          secure: true,
        });
      }
      return state;
    }
    // Загружаем приветственную фотку
    // case FETCH_GREET_PHOTO_SUCCESS: {
    //   state.greetDataisLoaded = true;
    //   state.greetData = action.data;
    //   return state;
    // }
    // Ожидаем загрузку фотографий с сервера
    case FETCH_PHOTOS_REQUEST: {
      state.dataIsLoaded = false;
      state.dataIsFetching = true;
      return state;
    }
    // Данные о фотографиях получены, сохраняем их в стейт
    case FETCH_PHOTOS_SUCCESS: {
      // debugger;
      state.dataIsLoaded = true;
      state.dataIsFetching = false;
      state.data.results.push (...action.data.results);
      // debugger;
      return state;
    }
    // Сохраням в стейт дивы с фотками
    case SET_PHOTOS: {
      // debugger;
      state.data = action.data;
      state.dataIsLoaded = true;
      return state;
    }
    // Сохраняем изиенённую информацию о фото в стейт
    case CHANGE_PHOTO_INFO: {
      state.data.results = state.data.results.map (data => {
        if (data.id === action.json.data.id) {
          data.liked_by_user = action.json.data.liked_by_user;
          data.likes = action.json.data.likes;
        }
        return data;
      });
      return state;
    }

    case LOAD_COOKIE: {
      state.cookieIsLoaded = true;
      return state;
    }

    default:
      return state;
  }
};

// export const fetchGreetDataSuccessAC = data => ({
//   type: FETCH_GREET_PHOTO_SUCCESS,
//   data,
// });

export const fetchUsernameAC = () => ({type: FETCH_USER_NAME});

export const setUserNameAC = name => ({
  type: SET_USER_NAME,
  name,
});

export const fetchBearerTokenAC = () => ({type: FETCH_BEARER_TOKEN});
export const setBearerTokenAC = bearerToken => ({
  type: SET_BEARER_TOKEN,
  bearerToken,
});

export const fetchDataRequestAC = () => ({type: FETCH_PHOTOS_REQUEST});
export const fetchDataSuccessAC = data => ({
  type: FETCH_PHOTOS_SUCCESS,
  data,
});

export const setDataAC = data => ({type: SET_PHOTOS, data});

export const changeDataInfoAC = json => ({
  type: CHANGE_PHOTO_INFO,
  json,
});

export const loadCookieAC = () => ({type: LOAD_COOKIE});

export default reducer;
