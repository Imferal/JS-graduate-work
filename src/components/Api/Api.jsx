import React from 'react';
import Unsplash, {toJson} from 'unsplash-js';
import Cookies from 'universal-cookie';
import {
  fetchBearerTokenAC,
  loadCookieAC,
  setBearerTokenAC,
} from '../../redux/apiReducer';
import {fetchUserNameAC, setUserNameAC} from '../../redux/userReducer';
import {fetchDataRequestAC, fetchDataSuccessAC} from '../../redux/dataReducer';

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
  // Если не авторизован и есть куки - автоматически авторизуемся
  if (
    window.location.toString ().indexOf ('/auth') + 1 === 0 &&
    cookies.get ('bearerToken') &&
    cookies.get ('bearerToken') !== undefined &&
    props.state.api.COOKIE_ISLOADED === false
  ) {
    unsplash.auth.setBearerToken (cookies.get ('bearerToken'));
    props.dispatch (setBearerTokenAC (cookies.get ('bearerToken'))); // Устанавливаем флаг загрузки BT
    props.dispatch (loadCookieAC ()); // Устанавливаем флаг загрузки куков
    window.location.assign (authenticationUrl);
  }

  // Если авторизованы, но нет Bearer Token в unsplash и куках
  if (
    window.location.toString ().indexOf ('/auth') + 1 !== 0 &&
    unsplash._bearerToken === null &&
    (cookies.get ('bearerToken') === null ||
      cookies.get ('bearerToken') === undefined ||
      cookies.get ('bearerToken') === 'undefined') &&
    props.state.api.BEARER_TOKEN_ISFETCHING === false &&
    props.state.api.BEARER_TOKEN_ISLOADED === false
  ) {
    props.dispatch (fetchBearerTokenAC ());
    unsplash.auth
      .userAuthentication (window.location.search.split ('code=')[1])
      .then (toJson)
      .then (json => {
        // debugger;
        unsplash.auth.setBearerToken (json.access_token);
        console.log (unsplash._bearerToken);
        // debugger;
        props.dispatch (setBearerTokenAC (json.access_token));
      });
  }

  // Если авторизованы, нет Bearer Token в unsplash, но есть в куках
  if (
    window.location.toString ().indexOf ('/auth') + 1 !== 0 &&
    unsplash._bearerToken === null &&
    cookies.get ('bearerToken') !== null &&
    cookies.get ('bearerToken') !== undefined &&
    cookies.get ('bearerToken') !== 'undefined' &&
    props.state.api.BEARER_TOKEN_ISFETCHING === false &&
    props.state.api.BEARER_TOKEN_ISLOADED === false
  ) {
    // debugger;
    unsplash.auth.setBearerToken (cookies.get ('bearerToken'));
    props.dispatch (setBearerTokenAC (cookies.get ('bearerToken')));
  }

  // Если авторизованы и всё есть - подгружаем фотографии и имя пользователя
  // debugger;
  if (
    window.location.toString ().indexOf ('/auth') + 1 !== 0 &&
    props.state.api.BEARER_TOKEN_ISLOADED === true &&
    props.state.data.SERVERDATA_ISLOADED === false &&
    props.state.data.SERVERDATA_ISFETCHING === false
  ) {
    // Показываем имя пользователя
    props.dispatch (fetchUserNameAC ());
    unsplash.currentUser.profile ().then (toJson).then (json => {
      console.log (json);
      // debugger;
      props.dispatch (setUserNameAC (json.first_name));
    });
    // Загружаем фотографии
    props.dispatch (fetchDataRequestAC ());
    unsplash.search.photos ('cats', 1).then (res => res.json ()).then (json => {
      console.log (json);
      // debugger;
      props.dispatch (fetchDataSuccessAC (json));
    });
  }

  return <div />;
}
