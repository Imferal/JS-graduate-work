import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-css';
import s from './Gallery.module.scss';

const Gallery = props => {
  return (
    <InfiniteScroll
      className={s.container}
      dataLength={props.dataLength}
      next={() => props.fetchMoreData (props.dataLength)}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{textAlign: 'center'}}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <Masonry
        breakpointCols={props.breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {props.jsx}
      </Masonry>
    </InfiniteScroll>
  );
};

export default Gallery;
