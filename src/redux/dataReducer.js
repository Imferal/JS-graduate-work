const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const CHANGE_LIKE_STATUS = 'CHANGE_LIKE_STATUS';
const SET_JSX = 'SET_JSX';

const initialState = {
  jsx: [],
  results: [],
  JSX_ISLOADED: false,
  SERVERDATA_ISFETCHING: false,
  SERVERDATA_ISLOADED: false,
};

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    // Ожидаем загрузку фотографий с сервера
    case FETCH_DATA_REQUEST: {
      state.SERVERDATA_ISLOADED = false;
      state.SERVERDATA_ISFETCHING = true;
      return state;
    }
    // Данные о фотографиях получены, сохраняем их в стейт
    case FETCH_DATA_SUCCESS: {
      state.SERVERDATA_ISLOADED = true;
      state.SERVERDATA_ISFETCHING = false;
      state.results.push (...action.json.results);
      return state;
    }
    // Сохраням в стейт готовый JSX с фотками
    case SET_JSX: {
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
export const changeLikeStatusAC = json => ({
  type: CHANGE_LIKE_STATUS,
  json,
});
