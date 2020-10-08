import React from 'react';
import s from './HeaderAuthorized.module.scss';
import logo from './../../assets/img/logo2.svg';
import {Link} from 'react-router-dom';

export default function HeaderAuthorized (props) {
  // debugger;
  return (
    <header className={s.header__wrapper}>
      <div className={s.header__body}>
        <div className={s.header__loginText}>
          Meow, {props.state.user.username ? props.state.user.username : ''}!
        </div>
        <img className={s.header__logo} src={logo} alt="Логотип КотоФото" />
        <Link className={s.header__loginButton} onClick={props.logout} to={'/'}>
          Logout
        </Link>
      </div>
    </header>
  );
}
