import React from 'react';
import Cookies from 'universal-cookie';
import Description from '../_shared/Description';
// import Likes from '../_shared/Likes';
import s from './Viewer.module.scss';

const cookies = new Cookies ();

const Viewer = props => {
  console.log (props.img);
  // debugger;
  return (
    <div className={s.viewer__wrapper}>
      <div className={s.viewer__container}>
        <Description
          userhtml={cookies.get ('activePhotoUserLink')}
          username={cookies.get ('activePhotoUserName')}
          photo={props.img}
          dispatch={props.dispatch}
          date={cookies
            .get ('activePhotoCreated')
            .slice (0, 10)
            .replace (/-/g, '.')}
        />
        <img
          className={s.viewer__photo}
          id={cookies.get ('activePhotoId')}
          src={cookies.get ('activePhotoUrl')}
          alt={cookies.get ('activePhotoDescription')}
        />
        <span />
      </div>
    </div>
  );
};

export default Viewer;
