import React from 'react';
import HeaderAuthorized from './HeaderAuthorized';
// import Unsplash, {toJson} from 'unsplash-js';
// import {setUserNameAC, fetchUsernameAC} from '../../redux/reducer';
// import {unsplash} from '../Api/Api';

export default function HeaderAuthorizedContainer (props) {
  // Выходим из приложения
  const logout = () => {
    alert ('Пока не реализовано');
  };

  // const unsplash = new Unsplash ({
  //   accessKey: props.state.security.ACCESS_KEY,
  //   secret: props.state.security.SECRET,
  //   callbackUrl: props.state.security.CALLBACK_URL,
  //   accessToken: props.state.security.ACCESS_TOKEN,
  //   bearerToken: props.state.security.BEARER_TOKEN,
  // });

  // // Если всё в порядке - подгружаем первые 10 фотографий
  // if (
  //   props.state.security.BEARER_TOKEN_ISLOADED === true &&
  //   props.state.username === '' &&
  //   props.state.usernameIsFetching === false
  // ) {
  //   props.dispatch (fetchUsernameAC ());
  //   unsplash.currentUser.profile ().then (toJson).then (json => {
  //     props.dispatch (setUserNameAC (json.first_name));
  //   });
  // }

  return <HeaderAuthorized state={props.state} logout={logout} />;
}
