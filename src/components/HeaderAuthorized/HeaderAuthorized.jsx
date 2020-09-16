import React from 'react';
import s from './HeaderAuthorized.module.scss';

export default function HeaderAuthorized (props) {
  return (
    <header className={s.header__wrapper}>
      <div className={s.header__body}>
        <div className={s.header__loginText}>
          Meow, {props.state.username ? props.state.username : ''}!
        </div>
        <button className={s.header__loginButton} onClick={props.logout}>
          Logout
        </button>
      </div>
    </header>
  );
}
