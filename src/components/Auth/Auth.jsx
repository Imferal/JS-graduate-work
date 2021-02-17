import React from 'react';
import {toJson} from 'unsplash-js';
import {unsplash} from '../../api/api';

export default function Auth (props) {
  // Подгружаем токен из localStaorage
  let bearerToken = localStorage.getItem ('bearerToken');

  // Подгружаем данные о фотографиях
  if (
    localStorage.getItem ('photos') !== null &&
    props.dataIsRestored === false
  ) {
    props.restorePhotosData ();
  }

  // Подгружаем имя пользователя
  if (
    localStorage.getItem ('user') !== null &&
    props.userNameIsRestored === false
  ) {
    props.restoreUserName ();
  }

  // Подгружаем выбранную фотографию, если есть
  if (
    localStorage.getItem ('activePhoto') !== null &&
    props.activePhotoIsRestored === false
  ) {
    props.restoreActivePhoto ();
  }

  // При авторизации:
  if (window.location.toString ().indexOf ('/auth') !== -1) {
    // Если нет Bearer Token в unsplash и localStorage
    if (
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

    // Если нет Bearer Token в unsplash, но есть в localStorage
    if (
      bearerToken !== (null && undefined && 'undefined') &&
      props.tokenIsFetching === false &&
      props.tokenIsLoaded === false
    ) {
      unsplash.auth.setBearerToken (bearerToken);
      props.setBearerToken (bearerToken);
    }

    // Если всё есть - подгружаем имя пользователя
    if (
      props.tokenIsLoaded === true &&
      props.userNameIsFetching === false &&
      props.userNameIsLoaded === false
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
    }

    // Если всё есть - подгружаем фотографии
    if (
      props.tokenIsLoaded === true &&
      props.dataIsLoaded === false &&
      props.dataIsFetching === false
    ) {
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
  }
  return <div />;
}
