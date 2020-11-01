const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const CHANGE_LIKE_STATUS = 'CHANGE_LIKE_STATUS';
const SET_ACTIVE_PHOTO = 'SET_ACTIVE_PHOTO';
const CHANGE_ACTIVE_PHOTO = 'CHANGE_ACTIVE_PHOTO';

const initialState = {
  results: [],
  SERVERDATA_ISFETCHING: false,
  SERVERDATA_ISLOADED: null,
  ACTIVE_PHOTO: null,
};

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    // Ожидаем загрузку фотографий с сервера
    case FETCH_DATA_REQUEST: {
      console.log ('Fetching data...');
      state.SERVERDATA_ISLOADED = false;
      state.SERVERDATA_ISFETCHING = true;
      return {...state};
    }
    // Данные о фотографиях получены, сохраняем их в стейт
    case FETCH_DATA_SUCCESS: {
      console.log ('Data fetching success!');
      state.SERVERDATA_ISLOADED = true;
      state.SERVERDATA_ISFETCHING = false;
      state.results.push (...action.json.results);
      return {...state, results: [...state.results]};
    }
    // Сохраняем изменённую информацию о фото в стейт
    case CHANGE_LIKE_STATUS: {
      state.results = state.results.map (photo => {
        if (photo.id === action.json.photo.id) {
          photo.liked_by_user = action.json.photo.liked_by_user;
          photo.likes = action.json.photo.likes;
        }
        return photo;
      });
      return {...state, results: [...state.results]};
    }
    // Сохраняем данные выбранной фотографии
    case SET_ACTIVE_PHOTO: {
      let activePhoto = state.results.find (photo => photo.id === action.id);
      state.ACTIVE_PHOTO = activePhoto;
      return {...state};
    }

    case CHANGE_ACTIVE_PHOTO: {
      // Задаём смещение
      let activePhoto = state.ACTIVE_PHOTO;
      let shift = action.direction === 'right' ? 1 : -1;
      // Вычисляем порядковый номер в массиве для новой фотографии
      let newIndex = state.results.indexOf (state.ACTIVE_PHOTO) + shift;
      // Назначаем новую активную фотографию
      state.ACTIVE_PHOTO = state.results[newIndex];
      // Если вышли за границы массива - оставляем прежнюю фотографию
      if (state.ACTIVE_PHOTO === undefined) {
        state.ACTIVE_PHOTO = activePhoto;
      }
      return {...state};
    }

    default:
      return {...state};
  }
}

export const fetchDataRequestAC = () => ({type: FETCH_DATA_REQUEST});
export const fetchDataSuccess = json => ({
  type: FETCH_DATA_SUCCESS,
  json,
});
export const changeLikeStatusAC = json => ({
  type: CHANGE_LIKE_STATUS,
  json,
});
export const setActivePhotoAC = id => ({type: SET_ACTIVE_PHOTO, id});
export const changeActivePhotoAC = direction => ({
  type: CHANGE_ACTIVE_PHOTO,
  direction,
});
