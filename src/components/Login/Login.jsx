import React from 'react';
import s from './Login.module.scss';
import loginphoto from './../../assets/img/loginphoto.webp';

export default function Login (props) {
  return (
    <main className={s.main__container}>
      <div className={s.main__box}>
        <img
          src={loginphoto}
          alt="black and white cat lying on brown bamboo chair inside room"
        />
        <h1 className={s.main__greetings}>
          Пожалуйста, войдите на сайт.
        </h1>
      </div>
    </main>
  );
}
