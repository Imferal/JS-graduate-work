import React from 'react';
import {removeBearerTokenAC} from '../../redux/apiReducer';
import {unsplash} from '../Api/Api';
import HeaderAuthorized from './HeaderAuthorized';

export default function HeaderAuthorizedContainer (props) {
  // Выходим из приложения
  const logout = () => {
    unsplash.auth.setBearerToken (null);
    props.dispatch (removeBearerTokenAC ());
  };

  return (
    <HeaderAuthorized
      state={props.state}
      dispatch={props.dispatch}
      logout={logout}
    />
  );
}
