import React from 'react';
import s from './Main.module.scss';

export default function Main (props) {
  return (
    <main className={s.main__container}>
      <div className={s.main__box}>
        <img
          // src={props.state.serverData.greetPhoto.url}
          // alt={props.state.serverData.greetPhoto.description}
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
          alt="black and white cat lying on brown bamboo chair inside room"
        />
        <h1 className={s.main__greetings}>
          Котики вас не знают. Пожалуйста, войдите на сайт.
        </h1>
      </div>
    </main>
  );
}
