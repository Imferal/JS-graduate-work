import React from 'react';
import MasonryInfiniteScroller from 'react-masonry-infinite';
import s from './Gallery.module.scss';

const Gallery = props => {
  // debugger;
  return (
    <main className={s.main__container}>
      <MasonryInfiniteScroller
        hasMore={false}
        loadMore={props.fetchMoreData}
        // loadMore={() => {
        //   alert ('Ку-ку!');
        // }}
      >

        {props.jsx}

      </MasonryInfiniteScroller>

      <button className={s.main__moreCats}>More cats!</button>
    </main>
  );
};

export default Gallery;
