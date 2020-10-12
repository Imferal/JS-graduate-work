import React from 'react';
import Description from '../_shared/Description';
import s from './Viewer.module.scss';

const Viewer = props => {
  // debugger;
  return (
    <div className={s.viewer__wrapper}>
      <div className={s.viewer__container}>
        <Description
          userhtml={props.img.user.links.html}
          username={props.img.user.username}
          photo={props.img}
          dispatch={props.dispatch}
          date={props.img.created_at.slice (0, 10).replace (/-/g, '.')}
        />
        <img
          className={s.viewer__photo}
          id={props.img.id}
          src={props.img.urls.regular}
          alt={props.img.alt_description}
        />
        <span />
      </div>
    </div>
  );
};

export default Viewer;
