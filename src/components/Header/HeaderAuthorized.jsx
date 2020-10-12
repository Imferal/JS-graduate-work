import React from 'react';
import s from './HeaderAuthorized.module.scss';
import {Link} from 'react-router-dom';
import HeaderCenter from './HeaderCenter';

export default function HeaderAuthorized (props) {
  // debugger;
  return (
    <header className={s.header__wrapper}>
      <div className={s.header__body}>
        <div className={s.header__loginText}>
          Мяу, {props.state.user.username ? props.state.user.username : ''}!
        </div>
        <HeaderCenter state={props.state} dispatch={props.dispatch} />
        <Link className={s.header__loginButton} onClick={props.logout} to={'/'}>
          Выйти
        </Link>
      </div>
    </header>
  );
}
