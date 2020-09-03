import React from 'react';
import s from './MainAuthorized.module.scss';

const MainAuthorized = props => {
  return (
    <main className={s.main}>
      <div className={s.main__container}>

        {props.images}

      </div>
      <button className={s.main__moreCats}>More cats!</button>
    </main>
  );
};

export default MainAuthorized;
