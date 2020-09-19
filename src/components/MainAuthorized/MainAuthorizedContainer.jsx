import React from 'react';
import MainAuthorized from './MainAuthorized';
import s from './MainAuthorized.module.scss';
// import preloader from '../../assets/img/preloader.gif';
import {
  changePhotoInfoAC,
  fetchPhotosRequestAC,
  fetchPhotosSuccessAC,
  setPhotosAC,
} from '../../redux/reducer';
import {toJson} from 'unsplash-js';
import {unsplash} from '../Api/Api';

const MainAuthorizedContainer = props => {
  debugger;
  let photos = [];

  let dataLength = props.state.serverData.results.length;
  let pages = dataLength / 10;

  const fetchMoreData = () => {
    debugger;
    props.dispatch (fetchPhotosRequestAC ());
    unsplash.search
      .photos ('cats', pages + 1, 10)
      .then (res => res.json ())
      .then (json => {
        props.dispatch (fetchPhotosSuccessAC (json));
      });
  };

  // Функция лайк/дизлайк
  const toggleLike = (id, isLiked) => {
    if (isLiked) {
      unsplash.photos.unlikePhoto (id).then (toJson).then (json => {
        console.log (json);
        // Надо перерисовать картинки
        props.dispatch (changePhotoInfoAC (json));
      });
    } else {
      unsplash.photos.likePhoto (id).then (toJson).then (json => {
        console.log (json);
        props.dispatch (changePhotoInfoAC (json));
      });
    }
  };

  if (
    props.state.galleryIsLoaded === true &&
    props.state.galleryIsFetching === false // Возможно, лишнее
  ) {
    photos = props.state.serverData.results.map ((e, i) => (
      <li className={s.main__box} key={i}>
        <button
          className={e.liked_by_user ? '' : s.main__liked_false}
          onClick={() => toggleLike (e.id, e.liked_by_user)}
        >
          {e.likes}
        </button>
        <img id={e.id} src={e.urls.small} alt={e.alt_description} key={i} />
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
    props.dispatch (setPhotosAC (photos));
  }

  return (
    <MainAuthorized
      dataLength={dataLength}
      fetchMoreData={fetchMoreData}
      photos={props.state.photos}
    />
  );
};

export default MainAuthorizedContainer;
