import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Masonry from 'react-masonry-css';
import s from './Gallery.module.scss';

const Gallery = props => {
  const breakpointColumnsObj = {
    default: 3,
    960: 2,
    640: 1,
  };
  return (
    <main className={s.main}>
      <button
        className={s.main__moreButton}
        onClick={() =>
          props.fetchMoreData (props.dataLength, props.dataIsLoaded)}
      >
        Ещё!
      </button>
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
          {props.jsx}
        </Masonry>
      </InfiniteScroll>
    </main>
  );
};

export default Gallery;
