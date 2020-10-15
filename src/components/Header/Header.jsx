import React from 'react';
import s from './Header.module.scss';
import Logo from '../_shared/Logo';
import {login} from '../../api/api';

export default function Header (props) {
  return (
    <header className={s.header__wrapper}>
      <div className={s.header__body}>
        {/* <p className={s.header__left}>Вы не вошли в систему</p> */}
        <div className={s.header__left}>
          <Logo />
        </div>
        <div className={s.header__loginContainer + ' ' + s.header__right}>
          <button className={s.header__loginButton} onClick={login}>
            Войти
          </button>
        </div>
      </div>
    </header>
  );
}
