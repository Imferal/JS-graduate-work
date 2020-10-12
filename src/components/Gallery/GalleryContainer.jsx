import React from 'react';
import Gallery from './Gallery';
import s from './Gallery.module.scss';
import {setActivePhotoAC, setJsxAC} from '../../redux/dataReducer';
import {Link} from 'react-router-dom';
import Description from '../_shared/Description';
import {fetchMoreData} from '../../api/api';

const breakpointColumnsObj = {
  default: 3,
  960: 2,
  640: 1,
};

const GalleryContainer = props => {
  let jsx = [];
  let dataLength = props.state.data.results.length;

  // Конвертируем данные в JSX
  if (
    props.state.data.results.length > 0 &&
    props.state.data.SERVERDATA_ISLOADED === true &&
    props.state.data.JSX_ISLOADED === false &&
    props.state.data.SERVERDATA_ISFETCHING === false
  ) {
    jsx = props.state.data.results.map ((e, i) => (
      <div className={s.main__item} key={i}>
        <Description
          userhtml={e.user.links.html}
          username={e.user.username}
          date={e.created_at.slice (0, 10).replace (/-/g, '.')}
          photo={e}
          dispatch={props.dispatch}
        />

        <Link
          onClick={e => props.dispatch (setActivePhotoAC (e.target.id))}
          to={`/auth/viewer/id${e.id}`}
        >
          <img
            id={e.id}
            src={e.urls.small}
            alt={e.alt_description}
            key={i}
            className={s.item__img}
          />
        </Link>

      </div>
    ));
    props.dispatch (setJsxAC (jsx));
  }

  return (
    <main className={s.main}>
      <button
        className={s.main__moreButton}
        onClick={() => fetchMoreData (dataLength)}
      >
        Ещё!
      </button>
      <Gallery
        dataLength={dataLength}
        breakpointColumnsObj={breakpointColumnsObj}
        fetchMoreData={fetchMoreData}
        jsx={props.state.data.jsx}
      />
    </main>
  );
};

export default GalleryContainer;
