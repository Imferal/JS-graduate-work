import Cookies from 'universal-cookie';

const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const CHANGE_LIKE_STATUS = 'CHANGE_LIKE_STATUS';
const SET_ACTIVE_PHOTO = 'SET_ACTIVE_PHOTO';
const LOAD_ACTIVE_PHOTO = 'LOAD_ACTIVE_PHOTO';
const SET_JSX = 'SET_JSX';
const UNSET_JSX = 'UNSET_JSX';
const cookies = new Cookies ();

const initialState = {
  jsx: [],
  results: [],
  JSX_ISLOADED: false,
  SERVERDATA_ISFETCHING: false,
  SERVERDATA_ISLOADED: false,
  ACTIVE_PHOTO: null,
};

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    // Ожидаем загрузку фотографий с сервера
    case FETCH_DATA_REQUEST: {
      console.log ('Fetching data...');
      state.SERVERDATA_ISLOADED = false;
      state.SERVERDATA_ISFETCHING = true;
      return state;
    }
    // Данные о фотографиях получены, сохраняем их в стейт
    case FETCH_DATA_SUCCESS: {
      console.log ('Data fetching success!');
      state.SERVERDATA_ISLOADED = true;
      state.SERVERDATA_ISFETCHING = false;
      state.results.push (...action.json.results);
      return state;
    }
    // Сбрасываем флаг загрузки JSX для fetchMoreData
    case UNSET_JSX: {
      console.log ('JSX_ISLOADED = false');
      state.JSX_ISLOADED = false;
      return state;
    }
    // Сохраняем в стейт готовый JSX с фотками
    case SET_JSX: {
      console.log ('JSX added.');
      state.jsx = action.jsx;
      state.JSX_ISLOADED = true;
      return state;
    }
    // // Сохраняем изменённую информацию о фото в стейт
    case CHANGE_LIKE_STATUS: {
      state.results = state.results.map (photo => {
        if (photo.id === action.json.photo.id) {
          photo.liked_by_user = action.json.photo.liked_by_user;
          photo.likes = action.json.photo.likes;
        }
        return photo;
      });
      return state;
    }
    // Сохраняем данные выбранной фотографии
    case SET_ACTIVE_PHOTO: {
      // debugger;
      let activePhoto = state.results.find (photo => photo.id === action.id);
      state.ACTIVE_PHOTO = activePhoto;
      cookies.set ('activePhotoUserLink', activePhoto.user.links.html, {
        sameSite: 'None',
        secure: true,
      });
      cookies.set ('activePhotoUserName', activePhoto.user.username, {
        sameSite: 'None',
        secure: true,
      });
      cookies.set ('activePhotoCreated', activePhoto.created_at, {
        sameSite: 'None',
        secure: true,
      });
      cookies.set ('activePhotoId', activePhoto.id, {
        sameSite: 'None',
        secure: true,
      });
      cookies.set ('activePhotoUrl', activePhoto.urls.full, {
        sameSite: 'None',
        secure: true,
      });
      cookies.set ('activePhotoDescription', activePhoto.alt_description, {
        sameSite: 'None',
        secure: true,
      });
      return state;
    }

    case LOAD_ACTIVE_PHOTO: {
      let id = cookies.get ('activePhotoId');
      let activePhoto = state.results.find (photo => photo.id === id);
      state.ACTIVE_PHOTO = activePhoto;
      return state;
    }

    default:
      return state;
  }
}

export const fetchDataRequestAC = () => ({type: FETCH_DATA_REQUEST});
export const fetchDataSuccessAC = json => ({
  type: FETCH_DATA_SUCCESS,
  json,
});
export const setJsxAC = jsx => ({type: SET_JSX, jsx});
export const unsetJsxAC = () => ({type: UNSET_JSX});
export const changeLikeStatusAC = json => ({
  type: CHANGE_LIKE_STATUS,
  json,
});
export const setActivePhotoAC = id => ({type: SET_ACTIVE_PHOTO, id});
export const loadActivePhotoAC = () => ({type: LOAD_ACTIVE_PHOTO});
