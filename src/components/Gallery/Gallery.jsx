import React from 'react';

// import {setActivePhotoAC, setJsxAC} from '../../redux/dataReducer';
// import {Link} from 'react-router-dom';
// import Description from '../_shared/Description';

import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-css';
import s from './Gallery.module.scss';

const Gallery = props => {
  // let dataLength = props.state.data.results.length;
  // let jsx = [];
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
        className={s.container}
        dataLength={props.dataLength}
        next={() => props.fetchMoreData (props.dataLength, props.dataIsLoaded)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{textAlign: 'center'}}>
            <b>Yay! You have seen it all</b>
          </p>
        }
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

// // Конвертируем данные в JSX
// if (
//   props.dataLength > 0 &&
//   props.dataIsLoaded === true &&
//   props.jsxIsLoaded === false &&
//   props.dataIsFetching === false
// ) {
//   jsx = props.results.map ((e, i) => (
//     <div className={s.main__item} key={i}>
//       <Description
//         userhtml={e.user.links.html}
//         username={e.user.username}
//         photo={e}
//         dispatch={props.dispatch}
//         date={e.created_at.slice (0, 10).replace (/-/g, '.')}
//       />

//       <Link
//         onClick={e => props.dispatch (setActivePhotoAC (e.target.id))}
//         to={`/auth/viewer/id${e.id}`}
//       >
//         <img
//           id={e.id}
//           src={e.urls.small}
//           alt={e.alt_description}
//           key={i}
//           className={s.item__img}
//         />
//       </Link>
//     </div>
//   ));

//   props.dispatch (setJsxAC (jsx));
// }
