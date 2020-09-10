import React from 'react';
import s from './Header.module.scss';
import Unsplash from 'unsplash-js';

export default function Header (props) {
  const unsplash = new Unsplash ({
    accessKey: props.state.security.ACCESS_KEY,
    secret: props.state.security.SECRET,
    callbackUrl: props.state.security.CALLBACK_URL,
  });

  const authenticationUrl = unsplash.auth.getAuthenticationUrl ([
    'public',
    'write_likes',
  ]);
  const login = () => {
    window.location.assign (authenticationUrl);
  };

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
