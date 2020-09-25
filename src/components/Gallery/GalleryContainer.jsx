import React from 'react';
import Gallery from './Gallery';
import s from './Gallery.module.scss';
import {toJson} from 'unsplash-js';
import {
  fetchDataRequestAC,
  changeLikeStatusAC,
  fetchDataSuccessAC,
  setJsxAC,
} from '../../redux/dataReducer';
import {unsplash} from '../Api/Api';

const GalleryContainer = props => {
  let jsx = [];
  // debugger;

  // Загрузить больше
  const fetchMoreData = () => {
    debugger;
    let pages = props.state.data.results.length / 10;
    props.dispatch (fetchDataRequestAC ());
    unsplash.search
      .photos ('cats', pages + 1, 10)
      .then (res => res.json ())
      .then (json => {
        props.dispatch (fetchDataSuccessAC (json));
      });
  };

  // Функция лайк/дизлайк
  const toggleLike = (id, isLiked) => {
    if (isLiked) {
      unsplash.photos.unlikePhoto (id).then (toJson).then (json => {
        console.log (json);
        // Надо перерисовать картинки
        props.dispatch (changeLikeStatusAC (json));
      });
    } else {
      unsplash.photos.likeData (id).then (toJson).then (json => {
        console.log (json);
        props.dispatch (changeLikeStatusAC (json));
      });
    }
  };

  // Конвертируем данные в JSX
  // debugger;
  if (
    props.state.data.results.length > 0 &&
    props.state.data.SERVERDATA_ISLOADED === true &&
    props.state.data.JSX_ISLOADED === false &&
    props.state.data.SERVERDATA_ISFETCHING === false // Возможно, лишнее
  ) {
    // debugger;
    jsx = props.state.data.results.map ((e, i) => (
      <li className={s.main__box} key={i}>
        <button
          className={e.liked_by_user ? '' : s.main__liked_false}
          onClick={() => toggleLike (e.id, e.liked_by_user)}
        >
          {e.likes}
        </button>
        <a
          href={
            window.location.search.split ('?')[0] + '/auth/viewer/id' + e.id
          }
        >
          <img id={e.id} src={e.urls.small} alt={e.alt_description} key={i} />
        </a>
        <div className={s.main__description}>
          <a href={e.user.links.html} className={s.main__author}>
            {e.user.username}
          </a>
          <p className={s.main__date}>
            {e.created_at.slice (0, 10).replace (/-/g, '.')}
          </p>
        </div>
      </li>
    ));
    props.dispatch (setJsxAC (jsx));
  }

  return (
    <Gallery
      dataLength={props.state.data.results.length}
      fetchMoreData={fetchMoreData}
      jsx={props.state.data.jsx}
    />
  );
};

export default GalleryContainer;
