import React from 'react';
import {toJson} from 'unsplash-js';
import Cookies from 'universal-cookie';
import {unsplash, authenticationUrl} from '../../api/api';

const cookies = new Cookies ();

export default function Auth (props) {
  let bearerToken = cookies.get ('bearerToken');

  // Если не авторизован и есть куки - автоматически авторизуемся
  if (
    window.location.toString ().indexOf ('/auth') + 1 === 0 &&
    bearerToken &&
    props.cookieIsLoaded === false
  ) {
    unsplash.auth.setBearerToken (bearerToken);
    props.setBearerToken (bearerToken); // Устанавливаем флаг загрузки BT
    props.loadCookie (); // Устанавливаем флаг загрузки куков
    window.location.assign (authenticationUrl);
  }

  // Если авторизованы, но нет Bearer Token в unsplash и куках
  if (
    window.location.toString ().indexOf ('/auth') + 1 !== 0 &&
    (bearerToken === null ||
      bearerToken === undefined ||
      bearerToken === 'undefined') &&
    props.tokenIsFetching === false &&
    props.tokenIsLoaded === false
  ) {
    props.fetchBearerToken ();
    unsplash.auth
      .userAuthentication (window.location.search.split ('code=')[1])
      .then (toJson)
      .then (json => {
        unsplash.auth.setBearerToken (json.access_token);
        props.setBearerToken (json.access_token);
      })
      .catch (e => {
        alert ('Ошибка ' + e.name + ':' + e.message + '\n' + e.stack);
      });
  }

  // Если авторизованы, нет Bearer Token в unsplash, но есть в куках
  if (
    window.location.toString ().indexOf ('/auth') + 1 !== 0 &&
    bearerToken !== null &&
    bearerToken !== undefined &&
    bearerToken !== 'undefined' &&
    props.tokenIsFetching === false &&
    props.tokenIsLoaded === false
  ) {
    unsplash.auth.setBearerToken (bearerToken);
    props.setBearerToken (bearerToken);
  }

  // Если авторизованы и всё есть - подгружаем фотографии и имя пользователя
  if (
    window.location.toString ().indexOf ('/auth') + 1 !== 0 &&
    props.tokenIsLoaded === true &&
    props.dataIsLoaded === (false || null) &&
    props.dataIsFetching === false
  ) {
    props.fetchUserName ();
    unsplash.currentUser
      .profile ()
      .then (toJson)
      .then (json => {
        props.setUserName (json.first_name);
      })
      .catch (e => {
        alert ('Ошибка ' + e.name + ':' + e.message + '\n' + e.stack);
      });
    props.fetchDataRequest ();
    unsplash.search
      .photos ('cats', 1)
      .then (res => res.json ())
      .then (json => {
        props.fetchDataSuccess (json);
      })
      .catch (e => {
        alert ('Ошибка ' + e.name + ':' + e.message + '\n' + e.stack);
      });
  }

  return <div />;
}
