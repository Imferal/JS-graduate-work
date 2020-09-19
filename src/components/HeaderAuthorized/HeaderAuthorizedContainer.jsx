import React from 'react';
import HeaderAuthorized from './HeaderAuthorized';

export default function HeaderAuthorizedContainer (props) {
  // Выходим из приложения
  const logout = () => {
    alert ('Пока не реализовано');
  };

  return <HeaderAuthorized state={props.state} logout={logout} />;
}
