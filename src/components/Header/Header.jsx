import React from 'react';
import s from './Header.module.scss';
import {login} from '../Api/Api';
// import Unsplash from 'unsplash-js';

export default function Header (props) {
  return (
    <header className={s.header__wrapper}>
      <div className={s.header__body}>
        <p>Вы не вошли в систему</p>
        <button className={s.header__loginButton} onClick={login}>
          Войти
        </button>
      </div>
    </header>
  );
}
