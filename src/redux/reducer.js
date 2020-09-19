import Cookies from 'universal-cookie';

// action names
const FETCH_BEARER_TOKEN = 'FETCH_BEARER_TOKEN';
const SET_BEARER_TOKEN = 'SET_BEARER_TOKEN';
const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
const FETCH_GREET_PHOTO_SUCCESS = 'FETCH_GREET_PHOTO_SUCCESS';
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
      cookies.set ('user', state.username, {
        sameSite: 'None',
        secure: true,
      });
      return state;
    }

    case FETCH_BEARER_TOKEN: {
      state.security.BEARER_TOKEN_ISFETCHIG = true;
      return state;
    }

    case SET_BEARER_TOKEN: {
      state.security.BEARER_TOKEN_ISLOADED = true;
      cookies.set ('bearerToken', action.bearerToken, {
        sameSite: 'None',
        secure: true,
      });
      return state;
    }
    // Загружаем приветственную фотку
    case FETCH_GREET_PHOTO_SUCCESS: {
      state.greetPhotoisLoaded = true;
      state.greetPhoto = action.photo;
      return state;
    }
    // Ожидаем загрузку фотографий с сервера
    case FETCH_PHOTOS_REQUEST: {
      state.galleryIsLoaded = false;
      state.galleryIsFetching = true;
      return state;
    }
    // Данные о фотографиях получены, сохраняем их в стейт
    case FETCH_PHOTOS_SUCCESS: {
      // debugger;
      state.galleryIsLoaded = true;
      state.galleryIsFetching = false;
      // state.serverData.results.push (action.result.results);
      state.serverData.results.push (...action.data.results);
      // debugger;
      return state;
    }
    case SET_PHOTOS: {
      state.photos = action.photos;
      return state;
    }
    // Сохраняем изиенённую информацию о фото в стейт
    case CHANGE_PHOTO_INFO: {
      state.serverData.results = state.serverData.results.map (photo => {
        if (photo.id === action.json.photo.id) {
          photo.liked_by_user = action.json.photo.liked_by_user;
          photo.likes = action.json.photo.likes;
        }
        return photo;
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

export const fetchGreetPhotoSuccessAC = photo => ({
  type: FETCH_GREET_PHOTO_SUCCESS,
  photo,
});

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

export const fetchPhotosRequestAC = () => ({type: FETCH_PHOTOS_REQUEST});
export const fetchPhotosSuccessAC = data => ({
  type: FETCH_PHOTOS_SUCCESS,
  data,
});

export const setPhotosAC = photos => ({type: SET_PHOTOS, photos});

export const changePhotoInfoAC = json => ({
  type: CHANGE_PHOTO_INFO,
  json,
});

export const loadCookieAC = () => ({type: LOAD_COOKIE});

export default reducer;
