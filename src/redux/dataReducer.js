const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const CHANGE_LIKE_STATUS = 'CHANGE_LIKE_STATUS';
const SET_ACTIVE_PHOTO = 'SET_ACTIVE_PHOTO';
const CHANGE_ACTIVE_PHOTO = 'CHANGE_ACTIVE_PHOTO';
<<<<<<< HEAD
const RESTORE_ACTIVE_PHOTO = 'RESTORE_ACTIVE_PHOTO';
const RESTORE_PHOTOS_DATA = 'RESTORE_PHOTOS_DATA';
=======
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599

const initialState = {
  results: [],
  SERVERDATA_ISFETCHING: false,
<<<<<<< HEAD
  SERVERDATA_ISLOADED: false,
  SERVERDATA_ISRESTORED: false,
  ACTIVE_PHOTO: null,
  ACTIVE_PHOTO_ISRESTORED: false,
=======
  SERVERDATA_ISLOADED: null,
  ACTIVE_PHOTO: null,
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
};

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    // Ожидаем загрузку фотографий с сервера
    case FETCH_DATA_REQUEST: {
<<<<<<< HEAD
=======
      console.log ('Fetching data...');
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
      state.SERVERDATA_ISLOADED = false;
      state.SERVERDATA_ISFETCHING = true;
      return {...state};
    }
<<<<<<< HEAD
    // Данные о фотографиях получены, сохраняем их в стейт и локальное хранилище
    case FETCH_DATA_SUCCESS: {
      state.SERVERDATA_ISLOADED = true;
      state.SERVERDATA_ISFETCHING = false;
      state.results.push (...action.json.results);

      localStorage.setItem ('photos', JSON.stringify (state.results));
=======
    // Данные о фотографиях получены, сохраняем их в стейт
    case FETCH_DATA_SUCCESS: {
      console.log ('Data fetching success!');
      state.SERVERDATA_ISLOADED = true;
      state.SERVERDATA_ISFETCHING = false;
      state.results.push (...action.json.results);
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
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
<<<<<<< HEAD
      localStorage.setItem ('activePhoto', JSON.stringify (activePhoto));
=======
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
      return {...state};
    }

    case CHANGE_ACTIVE_PHOTO: {
      // Задаём смещение
      let activePhoto = state.ACTIVE_PHOTO;
      let shift = action.direction === 'right' ? 1 : -1;
<<<<<<< HEAD
      // Находим ссылку на активную фотографию внутри массива всех фотографий
      let activePhotoLink = state.results.find (
        item => item.id === state.ACTIVE_PHOTO.id
      );
      // Вычисляем порядковый номер в массиве для новой фотографии
      let newIndex = state.results.indexOf (activePhotoLink) + shift;
=======
      // Вычисляем порядковый номер в массиве для новой фотографии
      let newIndex = state.results.indexOf (state.ACTIVE_PHOTO) + shift;
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
      // Назначаем новую активную фотографию
      state.ACTIVE_PHOTO = state.results[newIndex];
      // Если вышли за границы массива - оставляем прежнюю фотографию
      if (state.ACTIVE_PHOTO === undefined) {
        state.ACTIVE_PHOTO = activePhoto;
      }
<<<<<<< HEAD
      // Меняем URL
      window.history.pushState (
        {photo: state.ACTIVE_PHOTO.id},
        'photo id ' + state.ACTIVE_PHOTO.id,
        '/cats/auth/viewer/id' + state.ACTIVE_PHOTO.id
      );
      localStorage.setItem ('activePhoto', JSON.stringify (state.ACTIVE_PHOTO));
      return {...state};
    }

    case RESTORE_ACTIVE_PHOTO: {
      state.ACTIVE_PHOTO = JSON.parse (localStorage.getItem ('activePhoto'));
      state.ACTIVE_PHOTO_ISRESTORED = true;
      return {...state};
    }

    case RESTORE_PHOTOS_DATA: {
      state.results = JSON.parse (localStorage.getItem ('photos'));
      state.SERVERDATA_ISLOADED = true;
      state.SERVERDATA_ISRESTORED = true;
      return {...state, results: [...state.results]};
    }

=======
      return {...state};
    }

>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
    default:
      return {...state};
  }
}

<<<<<<< HEAD
export const fetchDataRequest = () => ({type: FETCH_DATA_REQUEST});
=======
export const fetchDataRequestAC = () => ({type: FETCH_DATA_REQUEST});
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
export const fetchDataSuccess = json => ({
  type: FETCH_DATA_SUCCESS,
  json,
});
<<<<<<< HEAD
export const changeLikeStatus = json => ({
  type: CHANGE_LIKE_STATUS,
  json,
});
export const setActivePhoto = id => ({type: SET_ACTIVE_PHOTO, id});
export const changeActivePhoto = direction => ({
  type: CHANGE_ACTIVE_PHOTO,
  direction,
});
export const restoreActivePhoto = () => ({type: RESTORE_ACTIVE_PHOTO});
export const restorePhotosData = () => ({type: RESTORE_PHOTOS_DATA});
=======
export const changeLikeStatusAC = json => ({
  type: CHANGE_LIKE_STATUS,
  json,
});
export const setActivePhotoAC = id => ({type: SET_ACTIVE_PHOTO, id});
export const changeActivePhotoAC = direction => ({
  type: CHANGE_ACTIVE_PHOTO,
  direction,
});
>>>>>>> dd7d44a6cbe8a1bbf88e54d95c7510ae013d6599
