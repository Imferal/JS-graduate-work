import React from 'react';
import s from './Viewer.module.scss';
import preloader from './../../assets/img/preloader.gif';

const Viewer = props => {
  if (props.state.data.results.length > 0) {
    // КОСТЫЛЬ! ПЕРЕДЕЛАТЬ!
    let id = window.location.toString ().slice (36);
    let data = props.state.data.results;
    let img = data.find (el => el.id === id);

    // debugger;
    // Функция лайк/дизлайк
    // toggleLike (id, isLiked)
    const toggleLike = () => alert ('click!');

    return (
      <div className={s.viewer__wrapper}>
        <div className={s.viewer__container}>
          <div className={s.viewer__description}>
            <a href={img.user.links.html} className={s.viewer__author}>
              {img.user.username}
            </a>
            <button
              className={img.liked_by_user ? '' : s.viewer__liked_false}
              onClick={() => toggleLike (img.id, img.liked_by_user)}
            >
              {img.likes}
            </button>
            <p className={s.viewer__date}>
              {img.created_at.slice (0, 10).replace (/-/g, '.')}
            </p>
          </div>

          <img id={img.id} src={img.urls.full} alt={img.alt_description} />

        </div>
      </div>
    );
  } else {
    return (
      <div className={s.viewer__wrapper}>
        <img
          className={s.viewer__isLoading}
          src={preloader}
          alt="Загружается..."
        />
      </div>
    );
  }
};

export default Viewer;
