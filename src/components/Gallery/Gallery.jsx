import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Masonry from 'react-masonry-css';
import {Link} from 'react-router-dom';
import Description from '../_shared/Description/Description';
import s from './Gallery.module.scss';

const Gallery = props => {
  const breakpointColumnsObj = {
    default: 3,
    960: 2,
    640: 1,
  };

  return (
    <main className={s.main}>
      {/* <button
        className={s.main__moreButton}
        onClick={() =>
          props.fetchMoreData(props.dataLength, props.dataIsLoaded)}
      >
        Ещё!
      </button> */}
      <InfiniteScroll
        className={s.main__body}
        loadMore={() =>
          props.fetchMoreData (props.dataLength, props.dataIsLoaded)}
        hasMore={true}
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >

          {props.results.map ((e, i) => (
            <div className={s.main__item} key={i}>
              <Description
                userhtml={e.user.links.html}
                username={e.user.username}
                photo={e}
                dispatch={props.dispatch}
                date={e.created_at.slice (0, 10).replace (/-/g, '.')}
              />

              <Link
                onClick={e => props.setActivePhoto (e.target.id)}
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
          ))}

        </Masonry>
      </InfiniteScroll>
    </main>
  );
};

export default Gallery;
