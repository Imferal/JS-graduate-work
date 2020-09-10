import React from 'react';
import MainAuthorized from './MainAuthorized';
import s from './MainAuthorized.module.scss';
import preloader from '../../assets/img/preloader.gif';
import {
  setAccessTokenAC,
  setBearerTokenAC,
  changePhotoInfoAC,
  fetchPhotosRequestAC,
  fetchPhotosSuccessAC,
} from '../../redux/reducer';
import Unsplash, {toJson} from 'unsplash-js';

const MainAuthorizedContainer = props => {
  let images = `<img src=${preloader} alt="Идёт загрузка, пожалуйста, ждите..." />`;

  const unsplash = new Unsplash ({
    accessKey: props.state.security.ACCESS_KEY,
    secret: props.state.security.SECRET,
    callbackUrl: props.state.security.CALLBACK_URL,
    accessToken: props.state.security.ACCESS_TOKEN,
    bearerToken: props.state.security.BEARER_TOKEN,
  });

  // Берём код из URL
  let urlCode = window.location.search.split ('code=')[1];

  // debugger;
  //
  //
  //
  // props.dispatch (fetchPhotosRequestAC ());

  // if (props.state.serverData.results === {}) {
  //   const p = new Promise (function (resolve, reject) {
  //     unsplash.search.photos ('cats', 1).then (toJson).then (json => {
  //       let result = json;
  //       resolve (result);
  //     });
  //   });
  //   p.then (
  //     result => {
  //       props.dispatch (fetchPhotosSuccessAC (result));
  //     },
  //     error => {
  //       alert ('Rejected: ' + error);
  //     }
  //   );
  // }
  //
  //
  //

  // debugger;
  // Есть ли в стейте Access Token?
  if (props.state.security.ACCESS_TOKEN_ISLOADED === false) {
    // Если нет, то добавляем его
    props.dispatch (setAccessTokenAC ());
    // И устанавливаем Bearer Token
    unsplash.auth
      .userAuthentication (urlCode)
      .then (res => res.json ())
      .then (json => {
        console.log ('Sending Bearer Token...');
        console.log (json);
        props.dispatch (setBearerTokenAC (json.access_token));
        unsplash.auth.setBearerToken (json.access_token);
      });
    // Если есть - проверяем, совпадает ли он с кодом в адресной строке
  } else {
    if (props.state.security.ACCESS_TOKEN !== urlCode) {
      // Если не совпадает - диспатчим, а если совпадает - продолжаем работу
      props.dispatch (setAccessTokenAC ());
    }
  }

  // Если всё в порядке - подгружаем первые 10 фотографий
  if (
    props.state.galleryIsLoaded === false &&
    props.state.galleryIsFetching === false &&
    props.state.security.BEARER_TOKEN_ISLOADED === true
  ) {
    props.dispatch (fetchPhotosRequestAC ());
    unsplash.search.photos ('cats', 1).then (res => res.json ()).then (json => {
      props.dispatch (fetchPhotosSuccessAC (json));
    });
  }

  // Функция лайк/дизлайк
  const toggleLike = (id, isLiked) => {
    // debugger;
    if (isLiked) {
      unsplash.photos.unlikePhoto (id).then (toJson).then (json => {
        console.log (json);
        // Надо перерисовать картинки
        props.dispatch (changePhotoInfoAC (json));
      });
    } else {
      unsplash.photos.likePhoto (id).then (toJson).then (json => {
        console.log (json);
        props.dispatch (changePhotoInfoAC (json));
      });
    }
  };

  // console.log (props.state);
  // debugger;

  if (
    props.state.galleryIsLoaded === true &&
    props.state.galleryIsFetching === false // Возможно, лишнее
  ) {
    console.log (props.state.serverData.results);
    images = props.state.serverData.results.map ((e, i) => (
      <div className={s.main__box} key={i}>
        <button
          className={e.liked_by_user ? '' : s.main__liked_false}
          onClick={() => toggleLike (e.id, e.liked_by_user)}
        >
          {e.likes}
        </button>
        <img id={e.id} src={e.urls.full} alt={e.alt_description} key={i} />
        <div className={s.main__description}>
          <a href={e.user.links.html} className={s.main__author}>
            {e.user.username}
          </a>
          <p className={s.main__date}>
            {e.created_at.slice (0, 10).replace (/-/g, '.')}
          </p>

        </div>
      </div>
    ));
  }

  return <MainAuthorized images={images} />;
};

export default MainAuthorizedContainer;
