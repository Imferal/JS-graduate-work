import React from 'react';
import {toJson} from 'unsplash-js';
import Cookies from 'universal-cookie';
import {unsplash, authenticationUrl} from '../../api/api';
import s from './../Gallery/Gallery.module.scss';
import {Link} from 'react-router-dom';
import Description from '../_shared/Description';

const cookies = new Cookies ();

export default function Authorization (props) {
  let bearerToken = cookies.get ('bearerToken');
  let dataLength = props.state.data.results.length;
  let jsx = [];

  // Если не авторизован и есть куки - автоматически авторизуемся
  if (
    window.location.toString ().indexOf ('/auth') + 1 === 0 &&
    bearerToken &&
    bearerToken !== undefined &&
    props.state.api.COOKIE_ISLOADED === false
  ) {
    unsplash.auth.setBearerToken (bearerToken);
    props.setBearerToken (bearerToken); // Устанавливаем флаг загрузки BT
    props.loadCookie (); // Устанавливаем флаг загрузки куков
    window.location.assign (authenticationUrl);
  }

  // Если авторизованы, но нет Bearer Token в unsplash и куках
  if (
    window.location.toString ().indexOf ('/auth') + 1 !== 0 &&
    unsplash._bearerToken === null &&
    (bearerToken === null ||
      bearerToken === undefined ||
      bearerToken === 'undefined') &&
    props.state.api.BEARER_TOKEN_ISFETCHING === false &&
    props.state.api.BEARER_TOKEN_ISLOADED === false
  ) {
    props.fetchBearerToken ();
    unsplash.auth
      .userAuthentication (window.location.search.split ('code=')[1])
      .then (toJson)
      .then (json => {
        unsplash.auth.setBearerToken (json.access_token);
        props.setBearerToken (json.access_token);
      });
  }

  // Если авторизованы, нет Bearer Token в unsplash, но есть в куках
  if (
    window.location.toString ().indexOf ('/auth') + 1 !== 0 &&
    unsplash._bearerToken === null &&
    bearerToken !== null &&
    bearerToken !== undefined &&
    bearerToken !== 'undefined' &&
    props.state.api.BEARER_TOKEN_ISFETCHING === false &&
    props.state.api.BEARER_TOKEN_ISLOADED === false
  ) {
    unsplash.auth.setBearerToken (bearerToken);
    props.setBearerToken (bearerToken);
  }

  // Конвертируем данные в JSX
  if (
    dataLength > 0 &&
    props.state.data.JSX_ISLOADED === false &&
    props.state.data.SERVERDATA_ISLOADED === true &&
    props.state.data.SERVERDATA_ISFETCHING === false
  ) {
    jsx = props.state.data.results.map ((e, i) => (
      <div className={s.main__item} key={i}>
        <Description
          userhtml={e.user.links.html}
          username={e.user.username}
          photo={e}
          dispatch={props.dispatch}
          date={e.created_at.slice (0, 10).replace (/-/g, '.')}
        />

        <Link
          onClick={e => props.setActivePhoto (e.target.id)}
          to={`/auth/viewer/id${e.id}`}
        >
          <img
            id={e.id}
            src={e.urls.small}
            alt={e.alt_description}
            key={i}
            className={s.item__img}
          />
        </Link>
      </div>
    ));

    props.setJsx (jsx);
  }

  // Если авторизованы и всё есть - подгружаем фотографии и имя пользователя
  if (
    window.location.toString ().indexOf ('/auth') + 1 !== 0 &&
    props.state.api.BEARER_TOKEN_ISLOADED === true &&
    props.state.data.SERVERDATA_ISLOADED === (false || null) &&
    props.state.data.SERVERDATA_ISFETCHING === false
  ) {
    props.fetchUserName ();
    unsplash.currentUser.profile ().then (toJson).then (json => {
      props.setUserName (json.first_name);
    });
    props.fetchDataRequest ();
    unsplash.search.photos ('cats', 1).then (res => res.json ()).then (json => {
      props.fetchDataSuccess (json);
    });
  }

  return <div />;
}
