import React from 'react';
import Unsplash, {toJson} from 'unsplash-js';
import Cookies from 'universal-cookie';
import {
  loadCookieAC,
  fetchUsernameAC,
  setUserNameAC,
  setBearerTokenAC,
  fetchPhotosRequestAC,
  fetchPhotosSuccessAC,
  fetchBearerTokenAC,
} from '../../redux/reducer';

export const unsplash = new Unsplash ({
  accessKey: 'ibjObXQdFjmUQ7ZfkgOkBMga42B9_ZjlZnCVn-Gytxg',
  secret: '5aMPjjFaQbnF_rseQj80B_eAiD9g0QldggR93EVWhgc',
  callbackUrl: 'http://localhost:3000/auth',
  bearerToken: null,
});

const cookies = new Cookies ();

const authenticationUrl = unsplash.auth.getAuthenticationUrl ([
  'public',
  'write_likes',
]);

export const login = () => {
  window.location.assign (authenticationUrl);
};

export default function Api (props) {
  // debugger;
  // Если не авторизованы и нет сохранения в куках - видим заставку
  // Если не авторизован и есть куки - автоматически авторизуемся
  if (
    window.location.search.split ('code=')[1] === undefined &&
    cookies.get ('bearerToken') &&
    cookies.get ('bearerToken') !== 'undefined' &&
    props.state.cookieIsLoaded === false
  ) {
    unsplash.auth.setBearerToken (cookies.get ('bearerToken'));
    props.dispatch (setBearerTokenAC (cookies.get ('bearerToken'))); // Устанавливаем флаг загрузки BT
    props.dispatch (loadCookieAC ()); // Устанавливаем флаг загрузки куков
    window.location.assign (authenticationUrl);
  }

  // Если авторизованы, но нет Bearer Token в unsplash и куках
  if (
    window.location.search.split ('code=')[1] &&
    unsplash._bearerToken === null &&
    (cookies.get ('bearerToken') === null ||
      cookies.get ('bearerToken') === undefined) &&
    props.state.security.BEARER_TOKEN_ISFETCHING === false &&
    props.state.security.BEARER_TOKEN_ISLOADED === false
  ) {
    props.dispatch (fetchBearerTokenAC ());
    unsplash.auth
      .userAuthentication (window.location.search.split ('code=')[1])
      .then (toJson)
      .then (json => {
        unsplash.auth.setBearerToken (json.access_token);
        props.dispatch (setBearerTokenAC (json.access_token));
      });
  }

  // Если авторизованы, нет Bearer Token в unsplash, но есть в куках
  if (
    window.location.search.split ('code=')[1] &&
    unsplash._bearerToken === null &&
    cookies.get ('bearerToken') &&
    props.state.security.BEARER_TOKEN_ISFETCHING === false &&
    props.state.security.BEARER_TOKEN_ISLOADED === false
  ) {
    unsplash.auth.setBearerToken (cookies.get ('bearerToken'));
    props.dispatch (setBearerTokenAC (cookies.get ('bearerToken')));
  }

  // Если авторизованы и всё есть - подгружаем фотографии и имя пользователя
  // debugger;
  if (
    window.location.search.split ('code=')[1] &&
    props.state.security.BEARER_TOKEN_ISLOADED === true &&
    props.state.galleryIsLoaded === false &&
    props.state.galleryIsFetching === false
  ) {
    props.dispatch (fetchUsernameAC ());
    unsplash.currentUser.profile ().then (toJson).then (json => {
      props.dispatch (setUserNameAC (json.first_name));
    });
    props.dispatch (fetchPhotosRequestAC ());
    unsplash.search.photos ('cats', 1).then (res => res.json ()).then (json => {
      console.log (json);
      props.dispatch (fetchPhotosSuccessAC (json));
    });
  }
  return <div />;
}
