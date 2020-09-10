// action names
const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
const SET_BEARER_TOKEN = 'SET_BEARER_TOKEN';
const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
const FETCH_GREET_PHOTO_SUCCESS = 'FETCH_GREET_PHOTO_SUCCESS';
const CHANGE_PHOTO_INFO = 'CHANGE_PHOTO_INFO';

// actions
const reducer = (state, action) => {
  switch (action.type) {
    // Получаем код доступа из url
    case SET_ACCESS_TOKEN: {
      state.security.ACCESS_TOKEN = window.location.search.split ('code=')[1];
      state.security.ACCESS_TOKEN_ISLOADED = true;
      return state;
    }

    case SET_BEARER_TOKEN: {
      state.security.BEARER_TOKEN = action.bearerToken;
      state.security.BEARER_TOKEN_ISLOADED = true;
      return state;
    }
    // Загружаем приветственную фотку
    case FETCH_GREET_PHOTO_SUCCESS: {
      // Флаг завершения получения данных
      state.greetPhotoisLoaded = true;
      state.greetPhoto = action.photo;
      return state;
    }
    // Ожидаем загрузку фотографий с сервера
    case FETCH_PHOTOS_REQUEST: {
      // Флаг начала передачи данных
      state.galleryIsLoaded = false;
      state.galleryIsFetching = true;
      return state;
    }
    // Данные о фотографиях получены, сохраняем их в стейт
    case FETCH_PHOTOS_SUCCESS: {
      // Флаг завершения получения данных
      state.galleryIsLoaded = true;
      state.galleryIsFetching = false;
      state.serverData = action.result;
      return state;
    }
    // Сохраняем изиенённую информацию о фото в стейт
    case CHANGE_PHOTO_INFO: {
      // debugger;
      state.serverData.results = state.serverData.results.map (photo => {
        if (photo.id === action.json.photo.id) {
          photo.liked_by_user = action.json.photo.liked_by_user;
          photo.likes = action.json.photo.likes;
        }
        return photo;
      });
      // debugger;
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

export const setAccessTokenAC = () => ({type: SET_ACCESS_TOKEN});
export const setBearerTokenAC = bearerToken => ({
  type: SET_BEARER_TOKEN,
  bearerToken,
});

export const fetchPhotosRequestAC = () => ({type: FETCH_PHOTOS_REQUEST});
export const fetchPhotosSuccessAC = result => ({
  type: FETCH_PHOTOS_SUCCESS,
  result,
});

export const changePhotoInfoAC = json => ({
  type: CHANGE_PHOTO_INFO,
  json,
});

export default reducer;

//
//
//
//
//
// export const setLike = id => ({type: SET_LIKE, id});
// export const setDislike = id => ({type: SET_DISLIKE, id});

// import Unsplash, {toJson} from 'unsplash-js';

// action names
// const LOAD_LOCAL = 'LOAD_LOCAL';
// const LOAD_PHOTOS = 'LOAD_PHOTOS';
// const LOGIN = 'LOGIN';

//   const unsplash = new Unsplash ({
//     accessKey: state.security.ACCESS_KEY,
//     secret: state.security.SECRET,
//     callbackUrl: 'http://localhost:3000/auth',
//   });

// const authenticationUrl = unsplash.auth.getAuthenticationUrl ([
//   'public',
//   'write_likes',
// ]);

// action creators
// export const loadLocalCreator = () => ({type: LOAD_LOCAL});
// export const loadPhotosCreator = () => ({type: LOAD_PHOTOS});
// export const loginCreator = () => ({type: LOGIN});

// case LOAD_LOCAL: {
//   // debugger;

// case SET_LIKE: {
//   unsplash.photos.likePhoto ('mtNweauBsMQ').then (toJson).then (json => {
//     console.log (json);
//     return state;
//   });
//   break;
// }

// case SET_DISLIKE: {
//   unsplash.photos.unlikePhoto ('mtNweauBsMQ').then (toJson).then (json => {
//     console.log (json);
//     return state;
//   });
//   break;
// }

//   // Загружаем данные из стейта, если есть
//   localStorage.getItem ('serverData')
//     ? (state.serverData = JSON.parse (localStorage.getItem ('serverData')))
//     : (state.serverData = []);

//   // Сбрасываем счётчик
//   state.isLoaded = false;
//   // localStorage.setItem ('isLoaded', false);
//   return state;
// }

// case LOAD_PHOTOS: {
//   state.isLoaded = true;
// const p = new Promise (function (resolve, reject) {
// Просим сервер прислать нам котиков
// unsplash.search.photos ('cats', 1).then (toJson).then (json => {
//   state.serverData = json;
// Когда котики получены - передаём их в then
//     resolve (state.serverData);
//     reject (console.log ('Ошибка загрузки данных'));
//   });
// });

// Когда котики получены
// p.then (serverData => {
// Ставим флаг, что данные загружены, и можно их отображать на странице
// state.isLoaded = true;
// localStorage.setItem ('isLoaded', true);
// localStorage.setItem ('serverData', JSON.stringify (serverData));
// });

//   return state;
// }
// case LOGIN:
// window.location.assign (authenticationUrl);
// return state;
