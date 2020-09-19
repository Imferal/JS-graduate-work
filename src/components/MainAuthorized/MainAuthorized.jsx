import React from 'react';
import MasonryInfiniteScroller from 'react-masonry-infinite';
import s from './MainAuthorized.module.scss';

const MainAuthorized = props => {
  debugger;
  return (
    <main>
      <MasonryInfiniteScroller
        className={s.main__container}
        position={false}
        useWindow={false}
        hasMore={false}
        loadMore={props.fetchMoreData}
        sizes={[
          {columns: 1, gutter: 20},
          {mq: '768px', columns: 2, gutter: 20},
          {mq: '1024px', columns: 3, gutter: 20},
        ]}
      >

        {props.photos}

      </MasonryInfiniteScroller>

      <button className={s.main__moreCats}>More cats!</button>
    </main>
  );
};

export default MainAuthorized;
