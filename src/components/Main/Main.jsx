import React from 'react';
import s from './Main.module.scss';

const Main = props => {
  return (
    <main className={s.main}>
      <div className={s.main__container}>

        {props.images}

      </div>
      <button className={s.main__moreCats}>More cats!</button>
    </main>
  );
};

export default Main;
