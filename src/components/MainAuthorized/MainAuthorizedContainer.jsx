import React from 'react';
import MainAuthorized from './MainAuthorized';
import s from './MainAuthorized.module.scss';
import preloader from '../../assets/img/preloader.gif';

const MainAuthorizedContainer = props => {
  let images = `<img src=${preloader} alt="Идёт загрузка, пожалуйста, ждите..." />`;

  if (props.state.isLoaded === true) {
    images = props.state.serverData.results.map ((el, i) => (
      <div className={s.main__box} key={i}>
        <button className={el.liked_by_user ? '' : s.main__liked_false}>
          {el.likes}
        </button>
        <img id={el.id} src={el.urls.full} alt={el.alt_description} key={i} />
        <div className={s.main__description}>
          <a href={el.user.links.html} className={s.main__author}>
            {el.user.username}
          </a>
          <p className={s.main__date}>
            {el.created_at.slice (0, 10).replace (/-/g, '.')}
          </p>

        </div>
      </div>
    ));
  }

  return <MainAuthorized images={images} />;
};

export default MainAuthorizedContainer;
