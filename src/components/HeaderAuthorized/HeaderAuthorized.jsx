import React from 'react';
import s from './HeaderAuthorized.module.scss';

export default function HeaderAuthorized (props) {
  return (
    <header className={s.header__wrapper}>
      <div className={s.header__body}>
        <div className={s.header__loginText}>{props.userLogin}</div>
        <button className={s.header__loginButton} onClick={props.logout}>
          Выйти
        </button>
      </div>
    </header>
  );
}
