// import Unsplash, {toJson} from 'unsplash-js';

// action names
// const LOAD_LOCAL = 'LOAD_LOCAL';
// const LOAD_PHOTOS = 'LOAD_PHOTOS';
// const LOGIN = 'LOGIN';
const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';

// actions
const reducer = (state, action) => {
  //   const unsplash = new Unsplash ({
  //     accessKey: state.security.ACCESS_KEY,
  //     secret: state.security.SECRET,
  //     callbackUrl: 'http://localhost:3000/auth',
  //   });

  // const authenticationUrl = unsplash.auth.getAuthenticationUrl ([
  //   'public',
  //   'write_likes',
  // ]);

  switch (action.type) {
    case FETCH_PHOTOS_REQUEST: {
      state.isLoaded = false;
      return state;
    }

    case FETCH_PHOTOS_SUCCESS: {
      state.isLoaded = true;
      state.serverData = action.serverData;
      console.log (state);
      return state;
    }
    // case LOAD_LOCAL: {
    //   // debugger;

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


    default:
      return state;
  }
};

// action creators
// export const loadLocalCreator = () => ({type: LOAD_LOCAL});
// export const loadPhotosCreator = () => ({type: LOAD_PHOTOS});
// export const loginCreator = () => ({type: LOGIN});

export const fetchPhotosRequestAC = () => ({type: FETCH_PHOTOS_REQUEST});
export const fetchPhotosSuccessAC = serverData => ({
  type: FETCH_PHOTOS_SUCCESS,
  serverData,
});

export default reducer;
