import React from 'react';
import s from './HeaderAuthorized.module.scss';
import {Link} from 'react-router-dom';
import HeaderCenter from './HeaderCenter';

export default function HeaderAuthorized (props) {
  return (
    <header className={s.header__wrapper}>
      <div className={s.header__body}>
        <div className={s.header__loginText + ' ' + s.header__left}>
          Мяу, {props.username ? props.username : ''}!
        </div>
        <div className={s.header__center}>
          <HeaderCenter state={props.state} dispatch={props.dispatch} />
        </div>
        <Link
          className={s.header__loginContainer + ' ' + s.header__right}
          onClick={props.logout}
          to={'/'}
        >
          <button className={s.header__loginButton}>
            Выйти
          </button>
        </Link>
      </div>
    </header>
  );
}
