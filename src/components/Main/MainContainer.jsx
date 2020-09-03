import React from 'react';
import Main from './Main';
import s from './Main.module.scss';
import preloader from '../../assets/img/preloader.gif';

const MainContainer = props => {
  let images = `<img src=${preloader} alt="Идёт загрузка, пожалуйста, ждите..." />`;

  if (props.state.isLoaded === true) {
    images = props.state.serverData.results.map ((el, i) => (
      <div className={s.main__box}>
        <img id={el.id} src={el.urls.full} alt={el.alt_description} key={i} />
      </div>
    ));
  }

  return <Main images={images} />;
};

export default MainContainer;
